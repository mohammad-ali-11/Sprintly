import { type ReactNode } from "react";

import BoardProviders from "@/prividers/BoardProviders";

import BoardLists from "./components/BoardLists/BoardLists";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  return (
    <BoardProviders>
      <div className={styles.board}>
        {/* <BoardToolbar /> */}
        <BoardLists />
      </div>
    </BoardProviders>
  );
}
