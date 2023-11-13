import { Config, TransformedToken, transformGroup } from "style-dictionary";

const buildPath = "./themes/";

const filter = (token: TransformedToken) =>
  !token.name.startsWith("font") && !token.name.startsWith("effect");

export const getStyleDictionaryConfig = (
  themeName: string,
  tokensFromFigma: any,
  transforms: string[] = []
): Config => {
  return {
    tokens: tokensFromFigma,
    platforms: {
      scss: {
        transforms: [...transformGroup.scss, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.scss`,
            format: "scss/variables",
            filter,
          },
        ],
      },
      css: {
        transforms: [...transformGroup.css, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.css`,
            format: "css/variables",
            filter,
            options: {
              outputReferences: true,
              selector: `.namespace-theme-${themeName}`,
            },
          },
        ],
      },
      js: {
        transforms: [...transformGroup.js, ...transforms],
        buildPath,
        files: [
          {
            destination: `${themeName}/tokens.json`,
            format: "json/nested-v2",
            filter,
          },
        ],
      },
    },
  };
};
