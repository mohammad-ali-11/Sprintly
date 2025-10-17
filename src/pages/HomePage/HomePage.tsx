import type { ReactNode } from "react";



import styles from "./HomePage.module.css";
import Board from "@/components/Board/Board";

export default function HomePage(): ReactNode {
  return (
    <div className={styles["home-page"]}>
      <Board/>
    </div>
  );
}
