import { useState, type FunctionComponent, type ReactNode } from "react";
import headingStyles from "gu-ds-css/output/typography.module.css";
import { CodeFormatter } from "../codeFormatter/CodeFormatter";
import styles from "./categoryHeader.module.css";

interface Props {
  heading: ReactNode;
  code?: string;
}

export const CategoryHeader: FunctionComponent<Props> = ({ heading, code }) => {
  const [codeIsOpen, setCodeIsOpen] = useState(false);
  return (
    <div className={styles.categoryHeader}>
      <div className={styles.top}>
        <h2 className="heading-xl">{heading}</h2>
        {code ? (
          <button
            aria-expanded={codeIsOpen}
            className={`${styles.codeToggleButton} ${headingStyles.headingXxs}`}
            onClick={() => {
              setCodeIsOpen(!codeIsOpen);
            }}
            type="button"
          >
            Source {codeIsOpen ? "↑" : "↓"}
          </button>
        ) : null}
      </div>
      {code ? (
        <div className={`${styles.code} ${codeIsOpen ? styles.codeOpen : ""}`}>
          <CodeFormatter>{code}</CodeFormatter>
        </div>
      ) : null}
    </div>
  );
};
