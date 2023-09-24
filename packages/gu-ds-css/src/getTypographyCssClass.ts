import { Item } from "./flattenNestedTokens";

export const getTypographyCssClass = ({ path, name, styles }: Item) => `
.${[...path, name].join("-")} {
  font-size: ${styles.fontSize}px;
  text-decoration: ${styles.textDecoration};
  font-family: ${styles.fontFamily};
  font-weight: ${styles.fontWeight};
  font-style: ${styles.fontStyle};
  font-stretch: ${styles.fontStretch};
  letter-spacing: ${styles.letterSpacing};
  line-height: ${styles.lineHeight / styles.fontSize};
  margin-bottom: ${styles.paragraphSpacing}px;
}
`;
