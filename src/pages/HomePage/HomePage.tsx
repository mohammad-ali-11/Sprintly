import type { ReactNode } from "react";

import Board from "@/components/Board/Board";

import styles from "./HomePage.module.css";

export default function HomePage(): ReactNode {
  return (
    <div className={styles["home-page"]}>
      <Board />
    </div>
  );
}
