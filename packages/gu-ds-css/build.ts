import * as fs from "fs";
import tokens from "gu-ds-tokens/output/tokens.json";
import { flattenNestedTokens } from "./src/flattenNestedTokens";
import { getTypographyCssClass } from "./src/getTypographyCssClass";
import { getTypographyJson } from "./src/getTypographyJson";
import { toCamelCase, trimLineBreaks } from "./src/utils";

const flattenedTokens = flattenNestedTokens(tokens.typography);

const plainCss = flattenedTokens
  .map((item) =>
    getTypographyCssClass([...item.path, item.name].join("-"), item.styles)
  )
  .map(trimLineBreaks)
  .join("\n");

fs.writeFileSync("output/typography.css", plainCss);

const moduleCss = flattenedTokens
  .map((item) =>
    getTypographyCssClass(toCamelCase([...item.path, item.name]), item.styles)
  )
  .map(trimLineBreaks)
  .join("\n");

fs.writeFileSync("output/typography.module.css", moduleCss);

const json = flattenedTokens.map(getTypographyJson).reduce((merged, object) => {
  const [key, value] = Object.entries(object)[0];
  merged[key] = value;
  return merged;
}, {});

fs.writeFileSync("output/typography.json", JSON.stringify(json, null, 2));

fs.writeFileSync(
  "output/flattenedTokens.json",
  JSON.stringify(flattenedTokens, null, 2)
);
