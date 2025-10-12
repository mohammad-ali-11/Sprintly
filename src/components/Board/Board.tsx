import styles from './Board.module.css'
import BoardLists from "./components/BoardLists/BoardLists";
import {  type ReactNode } from "react";
import BoardProviders from '@/prividers/BoardProviders';
import ActiveItemProvider from '@/prividers/ActiveItemProviders';
export default function Board(): ReactNode {

  return (
    <div className={styles.board}>
      <BoardProviders>
        <ActiveItemProvider>
          {/* <BoardToolbar /> */}
           <BoardLists  />
        </ActiveItemProvider>
      </BoardProviders>
   
     
   
    </div>
  );
}