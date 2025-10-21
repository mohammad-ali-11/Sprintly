import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import IconButton from "@/components/IconButton/IconButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";

import styles from "./ListHeader.module.css";
import ListItemModal from "@/modals/ListItemModal/ListItemModal";
import ListModal from "@/modals/ListModal/ListModal";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";
import type { ListType } from "@/types/list";

type props = {
  list: ListType;
  listIndex: number;
  listeners?: SyntheticListenerMap;
};
export default function ListHeader({
  listeners,
  list,
  listIndex,
}: props): ReactNode {
  const listItemModalRef=useRef<HTMLDialogElement>(null)
  const listModalRef=useRef<HTMLDialogElement>(null)

  
  const handleRemoveListButtonClick=():void=>{
    listModalRef.current?.showModal()
  }

  const handelCreateButtonClick = (): void => {
    listItemModalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["darg-handler"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{list.title}</div>
      </div>
      <div className={styles.actions}>
        <IconButton onClick={handleRemoveListButtonClick}>
          <MingcuteEdit2Line />
        </IconButton>
        <IconButton onClick={handelCreateButtonClick}>
          <MingcuteAddLine />
        </IconButton>
        
      </div>
      <ListModal modalRef={listModalRef} listIndex={listIndex} defaultValues={list}></ListModal>
      <ListItemModal modalRef={listItemModalRef} listIndex={listIndex} />
    </div>
  );
}
