const StyleDictionary = require("style-dictionary").extend("./config.js");
const minifyDictionary = require("./utils/minifyDictionary.js");

StyleDictionary.registerFormat({
  name: "json/nested-v2",
  formatter: ({ dictionary }) =>
    JSON.stringify(minifyDictionary(dictionary.tokens), null, 2) + "\n",
});

StyleDictionary.registerFormat({
  name: `es6-variables`,
  formatter: ({ dictionary }) => {
    return dictionary.allTokens
      .map((token) => {
        let value = JSON.stringify(token.value);
        // the `dictionary` object now has `usesReference()` and
        // `getReferences()` methods. `usesReference()` will return true if
        // the value has a reference in it. `getReferences()` will return
        // an array of references to the whole tokens so that you can access their
        // names or any other attributes.
        if (dictionary.usesReference(token.original.value)) {
          // Note: make sure to use `token.original.value` because
          // `token.value` is already resolved at this point.
          const refs = dictionary.getReferences(token.original.value);
          refs.forEach((ref) => {
            value = value.replace(ref.value, function () {
              return `${ref.name}`;
            });
          });
        }
        return `export const ${token.name} = ${value};`;
      })
      .join(`\n`);
  },
});

StyleDictionary.buildAllPlatforms();
