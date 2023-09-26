import * as typographyStyles from "gu-ds-css/output/typography.module.css";
import tokens from "gu-ds-tokens/output/tokens.json";
import type { FunctionComponent } from "react";
import { Page } from "../page/Page";
import { RichText } from "../richText/RichText";
import * as richTextStyles from "../richText/richText.css.ts";
import {
  category as categoryClass,
  color,
  colorBorder,
  colorBox,
  colorInfo,
  copyButton,
  grid,
  hexOpacity,
  hexOpaque,
  infoHeader,
} from "./colors.css";

const colorCategories = Object.entries(tokens.primitives.color).reduce(
  (colors, [key, value]) => {
    if (typeof value === "string") {
      colors.base = colors.base ?? ({} as Record<string, string>);
      colors.base[key] = value;
    } else {
      colors[key] = value;
    }
    return colors;
  },
  {
    base: {},
  } as Record<string, Record<string, string>>
);

export const Colors = () => (
  <Page
    heading="Colors"
    code={JSON.stringify(
      {
        primitives: {
          color: tokens.primitives.color,
        },
      },
      null,
      "  "
    )}
  >
    <RichText>
      <h2>Generelt om farger</h2>
      <p>
        Oversikt over hvilke farger som kan brukes sammen i henhold til kravene
        i WCAG finner du nederst.
      </p>
    </RichText>
    <div className={grid}>
      {Object.entries(colorCategories).map(([categoryName, colors]) => {
        return (
          <div key={categoryName} className={categoryClass}>
            <h3 className={richTextStyles.h3}>
              {categoryName.charAt(0).toUpperCase() + categoryName.slice(1)}
            </h3>
            {Object.entries(colors).map(([tokenKey, hex], index) => (
              <Color
                key={index}
                categoryName={categoryName}
                tokenKey={tokenKey}
                hex={hex}
              />
            ))}
          </div>
        );
      })}
    </div>
    <RichText>
      <h3>Fargekontraster</h3>
      <p>
        Godkjente kombinasjoner i henhold til kravene i WCAG.
        <br />
        100–400 kan alltid brukes med sort.
        <br />
        1000 burde alltid kunne brukes med hvit, men gjelder ikke den gule
        akkurat nå!
      </p>
    </RichText>
  </Page>
);

interface ColorProps {
  categoryName: string;
  tokenKey: string;
  hex: string;
}

const Color: FunctionComponent<ColorProps> = ({
  categoryName,
  tokenKey,
  hex,
}) => {
  return (
    <div key={categoryName} className={colorBox}>
      <div
        className={`${color} ${tokenKey === "white" ? colorBorder : ""}`}
        style={{ backgroundColor: hex }}
      />
      <div className={colorInfo}>
        <h4 className={typographyStyles.headingXs}>{tokenKey}</h4>
        <p>
          <div className={infoHeader}>
            <div className={typographyStyles.contentBadge}>Hex</div>
            <button
              className={copyButton}
              onClick={() => navigator.clipboard.writeText(hex)}
            >
              Kopier
            </button>
          </div>
          <div className={typographyStyles.contentBody}>
            <HexFormatter>{hex}</HexFormatter>
          </div>
        </p>
        <p>
          <div className={infoHeader}>
            <div className={typographyStyles.contentBadge}>Token</div>
            <button
              className={copyButton}
              onClick={() =>
                navigator.clipboard.writeText(
                  `tokens.primitives.color.${categoryName}.${tokenKey}`
                )
              }
            >
              Kopier
            </button>
          </div>
          <div className={typographyStyles.contentBody}>
            {categoryName}.{tokenKey}
          </div>
        </p>
      </div>
    </div>
  );
};

const HexFormatter: FunctionComponent<{ children: string }> = ({
  children: hex,
}) => {
  const opaque = hex.slice(0, 7);
  const opacity = hex.slice(7);
  return (
    <>
      <span className={hexOpaque}>{opaque}</span>
      <span className={hexOpacity}>{opacity}</span>
    </>
  );
};
