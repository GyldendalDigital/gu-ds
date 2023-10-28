import type { FunctionComponent, ReactNode } from "react";
import { CategoryHeader } from "../categoryHeader/CategoryHeader";
import styles from "./page.module.css";

interface Props {
  children?: ReactNode;
  code?: string;
  heading: string;
}

export const Page: FunctionComponent<Props> = ({ children, heading, code }) => (
  <div className={styles.page}>
    <CategoryHeader code={code} heading={heading} />
    <div className={styles.content}>{children}</div>
  </div>
);
