import type { ReactNode } from "react";

import { Link } from "react-router";

import styles from "./NotFoundPage.module.css";

export default function NotFoundPage(): ReactNode {
  return (
    <div className={styles["not-found-page"]}>
      <h1>404 | not Fund page</h1>
      <Link to="/">go to home</Link>
    </div>
  );
}
