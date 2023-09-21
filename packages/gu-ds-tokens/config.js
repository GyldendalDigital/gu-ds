module.exports = {
  source: ["./tokens-from-figma.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "./output/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
          filter: function(token){return !token.name.startsWith("font") && !token.name.startsWith("effect")},
        },
      ],
    },
    less: {
      transformGroup: "less",
      buildPath: "./output/",
      files: [
        {
          destination: "tokens.less",
          format: "less/variables",
          filter: function(token){return !token.name.startsWith("font") && !token.name.startsWith("effect")},
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "./output/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          filter: function(token){return !token.name.startsWith("font") && !token.name.startsWith("effect")},
          options: {
            outputReferences: true,
            selector: ":root, :host",
          },
        },
      ],
    },
    js: {
      transformGroup: "js",
      buildPath: "./output/",
      files: [
        { destination: "tokens.json", format: "json/nested" },
        // {
        //   destination: "tokens.js",
        //   format: "es6-object-simplified",
        // },
        // {
        //   destination: "token-variables.js",
        //   format: "es6-variables",
        // },
      ],
    },
  },
};
