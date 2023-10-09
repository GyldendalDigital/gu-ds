import { globalStyle, style } from "@vanilla-extract/css";
import tokens from "gyldendal-tokens/output/tokens.json";
import typography from "gu-ds-css/output/typography.json";

export const grid = style({
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, 298px)",
  justifyItems: "start",
  justifyContent: "start",
  alignItems: "start",
  gap: `${tokens.primitives.size[96]}px ${tokens.primitives.size[32]}px`,
  marginBottom: tokens.primitives.size[96],
});

export const category = style({
  display: "grid",
  gap: tokens.primitives.size[32],
});

export const colorBox = style({
  display: "grid",
  gridTemplateColumns: "1fr 1fr",
  gap: tokens.primitives.size[16],
  width: 298,
  borderRadius: tokens.primitives.border.radius[16],
  padding: tokens.semantic.layout.container.padding.small,
  backgroundColor: tokens.primitives.color.white,
  color: tokens.primitives.color.black,
});

export const color = style({
  borderRadius: tokens.primitives.border.radius[8],
  paddingTop: "100%",
});

export const colorBorder = style({
  outline: `solid 1px ${tokens.primitives.color.black}`,
});

export const colorInfo = style({
  display: "grid",
  gap: tokens.primitives.size[8],
  alignContent: "start",
});

export const infoHeader = style({
  display: "flex",
  alignItems: "center",
  gap: tokens.primitives.size[8],
  textTransform: "uppercase",
});

globalStyle(`${colorInfo} h4, ${colorInfo} p`, { margin: 0 });

export const hexOpaque = style({
  color: tokens.primitives.color.black,
  paddingRight: ".1em",
  textTransform: "uppercase",
});

export const hexOpacity = style({
  borderLeft: `solid 2px ${tokens.primitives.color.gray[400]}`,
  paddingInline: ".1em",
  color: tokens.primitives.color.black,
  textTransform: "uppercase",
});

export const copyButton = style({
  all: "initial",
  ...typography.contentBadge,
  fontWeight: 600,
  color: tokens.primitives.color.blue[800],
  textTransform: "uppercase",
  cursor: "pointer",
});
