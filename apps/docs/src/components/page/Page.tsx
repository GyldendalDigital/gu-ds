import type { FunctionComponent, ReactNode } from "react";
import styles from "./page.module.css";

interface Props {
  children?: ReactNode;
}

export const Page: FunctionComponent<Props> = ({ children }) => {
  return <div className={styles.page}>{children}</div>;
};
