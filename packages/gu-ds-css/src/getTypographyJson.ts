import { Item } from "./flattenNestedTokens";

const capitalizeFirstCharacter = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

const toCamelCase = (strings: string[]) =>
  strings
    .map((string, index) =>
      index === 0 ? string : capitalizeFirstCharacter(string)
    )
    .join("");

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
