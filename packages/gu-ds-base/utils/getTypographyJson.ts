import { Item } from "./flattenNestedTokens.ts";
import { toCamelCase } from "./string-utils.ts";

export const getTypographyJson = ({ path, name, styles }: Item) => ({
  [toCamelCase([...path, name])]: {
    fontSize: `${styles.fontSize}px`,
    textDecoration: styles.textDecoration,
    fontFamily: styles.fontFamily,
    fontWeight: styles.fontWeight,
    fontStyle: styles.fontStyle,
    fontStretch: styles.fontStretch,
    letterSpacing: styles.letterSpacing,
    lineHeight: styles.lineHeight / styles.fontSize,
  },
});
