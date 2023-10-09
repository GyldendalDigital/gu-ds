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
          filter: (token) => !token.name.startsWith("font") && !token.name.startsWith("effect"),
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
          filter: (token) => !token.name.startsWith("font") && !token.name.startsWith("effect"),
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
        { destination: "tokens.json", format: "json/nested-v2" },
      ],
    },
  },
};
