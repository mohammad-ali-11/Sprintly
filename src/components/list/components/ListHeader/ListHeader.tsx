import { useRef, type ReactNode } from "react";
import styles from './ListHeader.module.css'
import IconButton from "@/components/IconButton/IconButton";
import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";
import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";

type props={
    title:string;
    listIndex:number
}
export default function ListHeader({title,listIndex}:props):ReactNode {
    const mogalRef = useRef<HTMLDialogElement>(null);
    const handelClickButton = (): void => {
      mogalRef.current?.showModal();
    };
    return <div className={styles['list-header']}>
        <div className={styles.header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.actions}>
          <IconButton onClick={handelClickButton }>
          <MingcuteAddLine  />
        </IconButton>
         <IconButton>
          <MingcuteMore1Line />
        </IconButton>
        </div>
       
      </div>
      <CreateListItemModal ref={mogalRef} listIndex={listIndex} />
    </div>
}