import tokens from "gu-ds-tokens/output/tokens.json";

const Color = (colorName: string, colorValue: string) => (
  <div
    key={colorName}
    style={{
      display: "flex",
      justifyContent: "space-between",
      padding: "5px",
      background: colorValue,
    }}
  >
    <span>{`primitives-color-${colorName}`}</span>
    <span>
      {colorValue}{" "}
      <button onClick={() => navigator.clipboard.writeText(colorValue)}>
        📋
      </button>
    </span>
  </div>
);

export const Colors = () => (
  <div>
    {Object.entries(tokens.primitives.color).map(([rootName, rootValue]) => {
      return (
        <div key={rootName}>
          {typeof rootValue === "string"
            ? Color(rootName, rootValue)
            : Object.entries(rootValue).map(([subName, subValue]) =>
                Color(`${rootName}-${subName}`, subValue)
              )}
        </div>
      );
    })}
  </div>
);
