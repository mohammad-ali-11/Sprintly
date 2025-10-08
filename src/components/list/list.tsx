import type { ReactNode } from "react";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import type { ListType } from "@/types/list";

import IconButton from "../IconButton/IconButton";
import ListItem from "../ListItem/ListItem";

import styles from "./list.module.css";

type props = {
  list: ListType;
  onclick?: (listId: string, ItemId: string) => void;
};
export default function List({ list, onclick }: props): ReactNode {
  return (
    <div className={styles.list}>
      <div className={styles.header}>
        <div className={styles.title}>{list.title}</div>
        <IconButton>
          <MingcuteMore1Line />
        </IconButton>
      </div>
      <ul className={styles.items}>
        {list.items.map((item) => (
          <li key={item.id}>
            <ListItem item={item} listId={list.id} onclick={onclick} />
          </li>
        ))}
      </ul>
    </div>
  );
}
