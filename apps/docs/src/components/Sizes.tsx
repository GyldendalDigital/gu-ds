import tokens from "gu-ds-tokens/output/tokens.json";

const Size = (name: string, value: number) => (
  <tr
    key={name}
    style={{
      color: tokens.primitives.color.white,
    }}
  >
    <td>{`primitives-size-${name}`}</td>
    <td style={{ width: "100px" }}>
      <div
        style={{
          background: tokens.primitives.color.white,
          width: value + "px",
          height: tokens.primitives.size[18] + "px",
        }}
      />
    </td>
  </tr>
);

export const Sizes = () => (
  <table>
    {Object.entries(tokens.primitives.size).map(([sizeName, sizeValue]) =>
      Size(sizeName, sizeValue)
    )}
  </table>
);
