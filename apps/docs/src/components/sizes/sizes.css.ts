import { globalStyle, style } from "@vanilla-extract/css";
import { contentBody } from "gu-ds-css/output/typography.json";
import tokens from "gyldendal-tokens/output/tokens.json";

export const table = style({
  width: "100%",
  maxWidth: tokens.primitives.size[1024],
  borderSpacing: 0,
});

export const td = style({
  ...contentBody,
  width: "100%",
  maxWidth: 1024,
  borderSpacing: 0,
  padding: tokens.primitives.size[24],
  borderTop: `1px solid ${tokens.primitives.color.gray[300]}`,
  "&:first-child": {
    paddingLeft: `${tokens.primitives.size[32]}px`,
  },
});

export const tdNoTextBreak = style({
  whiteSpace: "nowrap",
  wordBreak: "keep-all",
});
