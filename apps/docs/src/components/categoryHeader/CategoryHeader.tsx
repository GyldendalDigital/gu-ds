import type { FunctionComponent, ReactNode } from "react";
import styles from "./categoryHeader.module.css";

interface Props {
  children: ReactNode;
}

export const CategoryHeader: FunctionComponent<Props> = ({ children }) => (
  <div className={styles.categoryHeader}>
    <h2 className="heading-xl">{children}</h2>
  </div>
);
