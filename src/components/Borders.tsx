import tokens from "../tokens/output/tokens.json";

const Border = (radius: number, width: number) => (
  <span
    style={{
      padding: "10px",
      gap: "10px",
      border: `${width}px solid white`,
      borderRadius: radius,
    }}
  >
    r: {radius} w: {width}
  </span>
);

export const Borders = () => (
  <div style={{ display: "grid", gap:"10px", gridTemplateColumns: Object.entries(tokens.primitives.border.radius).map(_ => "1fr").join(" ")}}>
    {Object.entries(tokens.primitives.border.width).map(([key, widthValue]) =>
      Object.entries(tokens.primitives.border.radius).map(([key, radiusValue]) => Border(radiusValue, widthValue))
    )}
  </div>
);
