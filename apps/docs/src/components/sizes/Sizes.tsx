import tokens from "gu-ds-tokens/output/tokens.json";
import { sizes, table, td } from "./sizes.css";
import { RichText } from "../richText/RichText";

const Size = (name: string, value: number) => (
  <tr key={name}>
    <td className={td}>{`primitives-size-${name}`}</td>
    <td className={td}>
      {value}px ({value / 16}rem)
    </td>
    <td className={td}>
      <div
        style={{
          background: tokens.primitives.color.violet[900],
          width: value + "px",
          height: tokens.primitives.size[18] + "px",
        }}
      />
    </td>
  </tr>
);

export const Sizes = () => (
  <div className={sizes}>
    <RichText>
      <h2>Size units</h2>
      <p>
        Størrelsesskalaen vår er basert på en rotverdi på <strong>1rem</strong>{" "}
        som tilsvarer 16px ved 1440px skjermbredde. Korresponderende
        pikselverdier listes ut sammen med rem-verdiene, men størrelser skal
        aldri implementeres i piksler. Alle størrelser skal settes med
        responsive enheter.
      </p>
    </RichText>
    <table className={table}>
      {Object.entries(tokens.primitives.size).map(([sizeName, sizeValue]) =>
        Size(sizeName, sizeValue)
      )}
    </table>
  </div>
);
