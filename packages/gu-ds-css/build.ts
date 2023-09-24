import * as fs from "fs";
import tokens from "gu-ds-tokens/output/tokens.json";
import { flattenNestedTokens } from "./src/flattenNestedTokens";
import { getTypographyCssClass } from "./src/getTypographyCssClass";
import { getTypographyJson } from "./src/getTypographyJson";

const flattenedTokens = flattenNestedTokens(tokens.typography);

const trimLineBreaks = (string: string) => string.replace(/^\s+|\s+$/g, "");

const css = flattenedTokens
  .map(getTypographyCssClass)
  .map(trimLineBreaks)
  .join("\n");

fs.writeFileSync("output/typography.css", css);

fs.writeFileSync("output/typography.module.css", css);

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
