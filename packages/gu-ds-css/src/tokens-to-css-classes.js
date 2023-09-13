const getTypographyClass = (name, value) => `
.${name} {
  font-size: ${value.fontSize}px;
  text-decoration: ${value.textDecoration};
  font-family: ${value.fontFamily};
  font-weight: ${value.fontWeight};
  font-style: ${value.fontStyle};
  font-stretch: ${value.fontStretch};
  letter-spacing: ${value.letterSpacing};
  line-height: ${value.lineHeight / value.fontSize};
  margin-bottom: ${value.paragraphSpacing}px;
}
`;

const tokensToCssClasses = (items, namePrefixes = []) =>
  Object.entries(items)
    .map(tokenToCssClass(namePrefixes))
    .filter((string) => string.trim() !== "")
    .map(trimLineBreaks)
    .join("\n");

const tokenToCssClass =
  (namePrefixes) =>
  ([name, value]) => {
    if (isTypographyStyle(value)) {
      const joinedName = getJoinedClassName(namePrefixes, name);
      return getTypographyClass(joinedName, value);
    }
    return tokensToCssClasses(value, [...namePrefixes, name]);
  };

const isTypographyStyle = (value) => Object.keys(value).includes("fontSize");

const getJoinedClassName = (namePrefixes, name) =>
  [...namePrefixes, name].join("-");

const trimLineBreaks = (string) => string.replace(/^\s+|\s+$/g, "");

module.exports = tokensToCssClasses;
