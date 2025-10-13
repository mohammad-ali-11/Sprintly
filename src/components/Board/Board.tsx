import { type ReactNode } from "react";

import ActiveItemProvider from "@/prividers/ActiveItemProviders";
import BoardProviders from "@/prividers/BoardProviders";

import BoardLists from "./components/BoardLists/BoardLists";

import styles from "./Board.module.css";

export default function Board(): ReactNode {
  return (
    <BoardProviders>
      <ActiveItemProvider>
        <div className={styles.board}>
          {/* <BoardToolbar /> */}
          <BoardLists />
        </div>
      </ActiveItemProvider>
    </BoardProviders>
  );
}
