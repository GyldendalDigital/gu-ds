import "gu-ds-css/output/typography.css";
import tokens from "gu-ds-tokens/output/tokens.json";
import type { FunctionComponent } from "react";
import "../css/inter.css";
import * as styles from "./typography.module.css";

console.log("styles", styles);

interface Item {
  path: string[];
  name: string;
  styles: any;
}

const flatten = (items: Record<string, any>, namePrefixes: string[] = []) =>
  Object.entries(items)
    .map((vvvv) => vvvv)
    .map(flattenItem(namePrefixes))
    .flat();

const flattenItem =
  (path: string[]) =>
  ([name, value]: [string, any]): Item[] =>
    isTypographyStyle(value)
      ? [{ path, name, styles: value }]
      : flatten(value, [...path, name]);

const isTypographyStyle = (value: any) =>
  Object.keys(value).includes("fontSize");

const allItems = flatten(tokens.typography);

interface Props {
  filter: (item: Item) => boolean;
}

export const Typography: FunctionComponent<Props> = ({ filter }) => {
  const items = allItems.filter(filter);
  return (
    <div
      style={{
        padding: 20,
        backgroundColor: tokens.primitives.color.gray[100],
        color: tokens.primitives.color.black,
      }}
    >
      <table className={styles.table}>
        <thead>
          <tr className={styles.tr}>
            <th className={`${styles.th} content-body`}>Name</th>
            <th className={`${styles.th} content-body`} colSpan={2}>
              font-size
            </th>
            <th className={`${styles.th} content-body`}>line-height</th>
            <th className={`${styles.th} content-body`}>font-weight</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <Variant key={index} item={item} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

interface VariantProps {
  item: Item;
}

const Variant: FunctionComponent<VariantProps> = ({ item }) => {
  const className = [...item.path, item.name].join("-");
  return (
    <tr className={styles.tr}>
      <td className={`${styles.td} content-body`}>
        {[...item.path, item.name].join("-")}
      </td>
      <td className={`${styles.td} content-body`}>{item.styles.fontSize}px</td>
      <td className={`${styles.td} content-body`}>
        {item.styles.fontSize / 16}rem
      </td>
      <td className={`${styles.td} content-body`}>
        {item.styles.lineHeight}px
      </td>
      <td className={`${styles.td} content-body`}>{item.styles.fontWeight}</td>
    </tr>
  );
};
