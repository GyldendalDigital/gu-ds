import { globalStyle, style } from "@vanilla-extract/css";
import {
  contentBody,
  headingM,
  headingL,
} from "gu-ds-css/output/typography.json";
import tokens from "gu-ds-tokens/output/tokens.json";

export const richText = style({
  margin: `0 0 ${tokens.primitives.size[16]}px 0`,
});

const heading = {
  margin: `0 0 ${tokens.primitives.size[16]}px 0`,
  paddingBottom: tokens.primitives.size[16],
  borderBottom: `1px solid ${tokens.primitives.color.gray[300]}`,
};

globalStyle(`${richText} h2`, {
  ...heading,
  ...headingL,
});

globalStyle(`${richText} h3`, {
  ...heading,
  ...headingM,
});

globalStyle(`${richText} p`, {
  ...contentBody,
  maxWidth: 576,
  margin: `0 0 ${tokens.primitives.size[32]}px 0`,
});
