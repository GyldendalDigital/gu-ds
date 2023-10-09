const StyleDictionary = require("style-dictionary").extend("./config.ts");
const minifyDictionary = require("./utils/minifyDictionary.ts");

StyleDictionary.registerFormat({
  name: "json/nested-v2",
  formatter: ({ dictionary }) =>
    JSON.stringify(minifyDictionary(dictionary.tokens), null, 2) + "\n",
});

StyleDictionary.buildAllPlatforms();
