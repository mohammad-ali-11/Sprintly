import { type ReactNode } from "react";

import BoardProviders from "@/prividers/BoardProviders";
import DndProvider from "@/prividers/DndProvider/DndProvider";

import BoardLists from "./components/BoardLists/BoardLists";
import BoardToolbar from "./components/BoardToolbar/BoardToolbar";

import styles from "./Board.module.css";

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
