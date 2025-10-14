import { useRef, type ReactNode } from "react";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import type { ListType } from "@/types/list";

import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";

import styles from "./list.module.css";
import CreateListItemModal from "../CreateListItemModal/CreateListItemModal";
import MingcuteAddLine from "@/icons/MingcuteAddLine";

type props = {
  list: ListType;
};
export default function List({ list }: props): ReactNode {
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
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem item={item} listId={list.id} />
          </li>
        ))}
      </ul>
      <CreateListItemModal ref={mogalRef} listId={list.id} />
    </div>
  );
}
