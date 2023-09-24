import type { FunctionComponent, ReactNode } from "react";
import styles from "./categoryHeader.module.css";

interface Props {
  children: ReactNode;
}

export const CategoryHeader: FunctionComponent<Props> = ({ children }) => (
  <div class={styles.categoryHeader}>
    <h2 class="heading-xl">{children}</h2>
  </div>
);
