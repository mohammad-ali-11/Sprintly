import { useRef, type ReactNode } from "react";

import ActiveItemProvider from "@/prividers/ActiveItemProviders";
import BoardProviders from "@/prividers/BoardProviders";

// import BoardLists from "./components/BoardLists/BoardLists";

import styles from "./Board.module.css";
import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import Button from "../Button/Button";

export default function Board(): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);
  const handelOpenButtonClick = (): void => {
    ref.current?.showModal();
    
  };
  return (
    <BoardProviders>
      <ActiveItemProvider>
        <div className={styles.board}>
          <Button color="primary" onClick={handelOpenButtonClick}>open</Button>
          {/* <BoardToolbar /> */}
          {/* <BoardLists /> */}
          
            <CreateListItemModal ref={ref} />
         
        </div>
      </ActiveItemProvider>
    </BoardProviders>
  );
}
