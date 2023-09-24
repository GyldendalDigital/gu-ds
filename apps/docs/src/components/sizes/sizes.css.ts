import { globalStyle, style } from "@vanilla-extract/css";
import { contentBody } from "gu-ds-css/output/typography.json";
import tokens from "gu-ds-tokens/output/tokens.json";

export const sizes = style({
  margin: `0 0 ${tokens.primitives.size[16]}px 0`,
  padding: tokens.primitives.size[32],
  backgroundColor: tokens.primitives.color.gray[100],
  color: tokens.primitives.color.black,
});

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
