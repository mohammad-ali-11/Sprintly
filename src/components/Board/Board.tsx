import BoardToolbar from "./components/BoardToolbar/BoardToolbar";
import styles from './Board.module.css'
import BoardLists from "./components/BoardLists/BoardLists";
import type { ReactNode } from "react";
export default function Board(): ReactNode {
  return (
    <div className={styles.board}>
      <BoardToolbar />
      <BoardLists  />
    </div>
  );
}