import { useRef, type ReactNode } from "react";

import ActiveItemProvider from "@/prividers/ActiveItemProviders";
import BoardProviders from "@/prividers/BoardProviders";

import BoardLists from "./components/BoardLists/BoardLists";

import styles from "./Board.module.css";
import Modal from "../Modal/Modal";

export default function Board(): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);
  const handelOpenButtonClick = (): void => {
    ref.current?.showModal();
  };
  return (
    <BoardProviders>
      <ActiveItemProvider>
        <div className={styles.board}>
          <button onClick={handelOpenButtonClick}>open</button>
          {/* <BoardToolbar /> */}
          {/* <BoardLists /> */}
          <Modal ref={ref} heading="this is frist modal">This is children</Modal>
        </div>
      </ActiveItemProvider>
    </BoardProviders>
  );
}
