import tokens from "gu-ds-tokens/output/tokens.json";
import "../css/inter.css";
import "gu-ds-css/output/typography.css";
import type { FunctionComponent } from "react";

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

const items = flatten(tokens.typography);

export const Typography = () => (
  <div
    style={{
      padding: 20,
      backgroundColor: tokens.primitives.color.black,
      color: tokens.primitives.color.white,
    }}
  >
    <style>
      {`
      th {
        text-align: left;
      }
    
      th,
      td {
        padding: 8px;
        vertical-align: top;
        border-bottom: solid 1px white;
        font-weight: normal;
      }
    `}
    </style>
    <table>
      <thead>
        <tr>
          <th className="content-body">Name</th>
          <th className="content-body" colSpan={2}>
            font-size
          </th>
          <th className="content-body">line-height</th>
          <th className="content-body">font-weight</th>
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

interface VariantProps {
  item: Item;
}

const Variant: FunctionComponent<VariantProps> = ({ item }) => {
  const className = [...item.path, item.name].join("-");
  return (
    <tr>
      <td className={className}>{[...item.path, item.name].join("-")}</td>
      <td className="content-body">{item.styles.fontSize}px</td>
      <td className="content-body">{item.styles.fontSize / 16}rem</td>
      <td className="content-body">{item.styles.lineHeight}px</td>
      <td className="content-body">{item.styles.fontWeight}</td>
    </tr>
  );
};
