import type { ReactNode } from "react";

import styles from "./ErrorPage.module.css";

export default function ErrorPage(): ReactNode {
  return (
    <div className={styles["error-page"]}>
      <h1>ooops! Someting went Wrong...</h1>
      <a href="/">go to home</a>
    </div>
  );
}
