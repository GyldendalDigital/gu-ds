import { globalStyle, style } from "@vanilla-extract/css";
import {
  contentBody,
  headingL,
  headingM,
} from "gu-ds-css/output/typography.json";
import { getTheme } from "../../theme";

const { tokens } = getTheme();

export const richText = style({
  marginBottom: tokens.primitives.size[48] + tokens.primitives.size[24],
  color: "var(--semantic-color-surface-container-foreground)",
});

const heading = {
  margin: `0 0 ${tokens.primitives.size[16]}px 0`,
  paddingBottom: tokens.primitives.size[16],
  borderBottom: `2px solid ${tokens.primitives.color.gray[300]}`,
};

const _h2 = {
  ...heading,
  ...headingL,
};

export const h2 = style(_h2);

globalStyle(`${richText} h2`, _h2);

const _h3 = {
  ...heading,
  ...headingM,
};

export const h3 = style(_h3);

globalStyle(`${richText} h3`, _h3);

const _p = {
  ...contentBody,
  maxWidth: 576,
  margin: `0 0 ${tokens.primitives.size[32]}px 0`,
};

export const p = style(_p);

globalStyle(`${richText} p`, _p);
