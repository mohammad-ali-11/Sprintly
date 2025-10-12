import styles from './Board.module.css'
import BoardLists from "./components/BoardLists/BoardLists";
import {  type ReactNode } from "react";
import BoardProviders from '@/prividers/BoardProviders';
export default function Board(): ReactNode {

  return (
    <div className={styles.board}>
      <BoardProviders>
          {/* <BoardToolbar /> */}
      <BoardLists  />
      </BoardProviders>
   
     
   
    </div>
  );
}