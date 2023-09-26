import type { FunctionComponent, ReactNode } from "react";
import styles from "./page.module.css";
import { CategoryHeader } from "../categoryHeader/CategoryHeader";

interface Props {
  children?: ReactNode;
  code?: string;
  heading: string;
}

export const Page: FunctionComponent<Props> = ({ children, heading, code }) => (
  <div className={styles.page}>
    <CategoryHeader heading={heading} code={code} />
    <div className={styles.content}>{children}</div>
  </div>
);
