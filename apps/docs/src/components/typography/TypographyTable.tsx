import typographyItems from "gu-ds-css/output/flattenedTokens.json";
import "gu-ds-css/output/typography.css";
import type { FunctionComponent } from "react";
import "../../css/inter.css";
import * as styles from "./typography.module.css";

interface Item {
  path: string[];
  name: string;
  styles: any;
}

interface Props {
  filter: (item: Item) => boolean;
}

export const TypographyTable: FunctionComponent<Props> = ({ filter }) => {
  const items = typographyItems.filter(filter);
  return (
    <table className={styles.table}>
      <thead>
        <tr className={styles.tr}>
          <th className={`${styles.th} heading-xs`}>Text style</th>
          <th className={`${styles.th} heading-xs`} colSpan={2}>
            Font size
          </th>
          <th className={`${styles.th} heading-xs`}>Line height</th>
          <th className={`${styles.th} heading-xs`}>Font weight</th>
          <th className={`${styles.th} heading-xs`}>Font style</th>
        </tr>
      </thead>
      <tbody>
        {items.map((item, index) => (
          <Variant key={index} item={item} />
        ))}
      </tbody>
    </table>
  );
};

interface VariantProps {
  item: Item;
}

const Variant: FunctionComponent<VariantProps> = ({ item }) => {
  const className = [...item.path, item.name].join("-");
  return (
    <tr className={styles.tr}>
      <td className={`${styles.tdWithFormatting} ${className}`}>
        {[...item.path, item.name].join(" ")}
      </td>
      <td className={`${styles.td} content-body`}>{item.styles.fontSize}px</td>
      <td className={`${styles.td} content-body`}>
        {item.styles.fontSize / 16}rem
      </td>
      <td className={`${styles.td} content-body`}>
        {item.styles.lineHeight}px
      </td>
      <td className={`${styles.td} content-body`}>{item.styles.fontWeight}</td>
      <td className={`${styles.td} content-body`}>{item.styles.fontStyle}</td>
    </tr>
  );
};
