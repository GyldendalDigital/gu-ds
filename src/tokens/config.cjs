module.exports = {
  source: ["./src/tokens/tokens-from-figma.json"],
  platforms: {
    scss: {
      transformGroup: "scss",
      buildPath: "./src/tokens/output/",
      files: [
        {
          destination: "tokens.scss",
          format: "scss/variables",
        },
      ],
    },
    less: {
      transformGroup: "less",
      buildPath: "./src/tokens/output/",
      files: [
        {
          destination: "tokens.less",
          format: "less/variables",
        },
      ],
    },
    css: {
      transformGroup: "css",
      buildPath: "./src/tokens/output/",
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
    // ts: {
    //   transformGroup: "js",
    //   buildPath: "./src/tokens/output/",
    //   files: [
    //     {
    //       destination: "tokens.d.ts",
    //       format: "typescript/es6-declarations",
    //     },
    //   ],
    // },
    js: {
      transformGroup: "js",
      buildPath: "./src/tokens/output/",
      files: [
        { destination: "tokens.json", format: "json/nested" },
        {
          destination: "tokens.js",
          format: "es6-object-simplified",
        },
        {
          destination: "token-variables.js",
          format: "es6-variables",
        },
      ],
    },
  },
};
