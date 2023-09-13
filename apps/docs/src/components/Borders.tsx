import tokens from "gu-ds-tokens/output/tokens.json";

const Border = (
  radiusName: string,
  radiusValue: number,
  widthName: string,
  widthValue: number
) => (
  <span
  key={radiusName+widthName}
    style={{
      padding: "10px",
      border: `${widthValue}px solid white`,
      borderRadius: radiusValue,
      textAlign: "center",
    }}
  >
    {`primitives-border-radius-${radiusName}`} <br />
    {`primitives-border-width-${widthName}`}
  </span>
);

export const Borders = () => (
  <div
    style={{
      display: "grid",
      gap: "10px",
      gridTemplateColumns: Object.entries(tokens.primitives.border.width)
        .map((_) => "1fr")
        .join(" "),
    }}
  >
    {Object.entries(tokens.primitives.border.radius).map(
      ([radiusName, radiusValue]) =>
        Object.entries(tokens.primitives.border.width).map(
          ([widthName, widthValue]) =>
            Border(radiusName, radiusValue, widthName, widthValue)
        )
    )}
  </div>
);
