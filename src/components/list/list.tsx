import { useRef, type ReactNode } from "react";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import type { ListType } from "@/types/list";

import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";

import styles from "./list.module.css";
import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import MingcuteAddLine from "@/icons/MingcuteAddLine";
import { SortableContext } from "@dnd-kit/sortable";
import { useDraggable } from "@dnd-kit/core";


type props = {
  listIndex:number
  list: ListType;
};
export default function List({ list ,listIndex}: props): ReactNode {
 const{setNodeRef} =useDraggable({
    id:list.id,
    data:{isList:true,listIndex,list}
  })
    const mogalRef = useRef<HTMLDialogElement>(null);

    const handelClickButton = (): void => {
      mogalRef.current?.showModal();
    };

  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{list.title}</div>
        <div className={styles.actions}>
          <IconButton onClick={handelClickButton }>
          <MingcuteAddLine  />
        </IconButton>
         <IconButton>
          <MingcuteMore1Line />
        </IconButton>
        </div>
       
      </div>
      <SortableContext id={list.id} items={list.items.map(item=>item.id)}>
      <ul ref={setNodeRef} className={styles.items}>
        {list.items.map((item,ItemIndex) => (
          <li key={item.id}>
            <ListItem item={item} listIndex={listIndex} ItemIndex={ItemIndex}/>
          </li>
        ))}
      </ul>
      </SortableContext>
      <CreateListItemModal ref={mogalRef} listIndex={listIndex} />
    </div>
  );
}
