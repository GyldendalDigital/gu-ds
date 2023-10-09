import * as fs from "fs";
import tokens from "./output/tokens.json";
import { flattenNestedTokens } from "./utils/flattenNestedTokens";
import { getTypographyCssClass } from "./utils/getTypographyCssClass";
import { getTypographyJson } from "./utils/getTypographyJson";
import { trimLineBreaks } from "./utils/string-utils";

const typographyTokensFlattened = flattenNestedTokens(tokens.typography);

fs.writeFileSync(
  "output/typography-tokens-flattened.json",
  JSON.stringify(typographyTokensFlattened, null, 2)
);

const typographyTokens = typographyTokensFlattened
  .map(getTypographyJson)
  .reduce((merged, object) => {
    const [key, value] = Object.entries(object)[0];
    merged[key] = value;
    return merged;
  }, {});

fs.writeFileSync(
  "output/typography-tokens.json",
  JSON.stringify(typographyTokens, null, 2)
);

const plainCss = typographyTokensFlattened
  .map((item) =>
    getTypographyCssClass([...item.path, item.name].join("-"), item.styles)
  )
  .map(trimLineBreaks)
  .join("\n");

fs.writeFileSync("output/typography.css", plainCss);

const moduleCss = typographyTokensFlattened
  .map((item) => getTypographyCssClass(item.fullNameCamelCase, item.styles))
  .map(trimLineBreaks)
  .join("\n");

fs.writeFileSync("output/typography.module.css", moduleCss);
