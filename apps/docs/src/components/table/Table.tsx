import type { FunctionComponent, PropsWithChildren, ReactNode } from "react";
import styles from "./table.module.css";
import typographyStyles from "gu-ds-css/output/typography.module.css";

interface Props {
  children?: ReactNode;
}

export const Table: FunctionComponent<Props> = ({ children }) => (
  <table className={styles.table}>{children}</table>
);

export const Th: FunctionComponent<React.JSX.IntrinsicElements["th"]> = ({
  children,
  className = "",
  ...props
}) => (
  <th {...props} className={`${typographyStyles.headingXs} ${className}`}>
    {children}
  </th>
);

export const Td: FunctionComponent<React.JSX.IntrinsicElements["td"]> = ({
  children,
  className = "",
  ...props
}) => (
  <td {...props} className={`${typographyStyles.contentBody} ${className}`}>
    {children}
  </td>
);
