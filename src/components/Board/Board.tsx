import { type ReactNode } from "react";

import BoardProviders from "@/prividers/BoardProviders";
import DndProvider from "@/prividers/DndProvider/DndProvider";

import BoardLists from "./components/BoardLists/BoardLists";

import styles from "./Board.module.css";
import BoardToolbar from "./components/BoardToolbar/BoardToolbar";

export default function Board(): ReactNode {
  return (
    <BoardProviders>
      <DndProvider>
        <div className={styles.board}>
          <BoardToolbar />
          <BoardLists />
        </div>
      </DndProvider>
    </BoardProviders>
  );
}
