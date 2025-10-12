import { use, type MouseEvent, type ReactNode } from "react";

import type { ListItemType } from "@/types/list.item";

import styles from "./ListItem.module.css";
import IconButton from "../IconButton/IconButton";
import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";
import { BoardContext } from "@/contect/board-context";
type props = {
  listId: string;
  item: ListItemType;
  onclick?: (listId: string, ItemId: string) => void
};
export default function ListItem({ item, onclick, listId }: props): ReactNode {
  const {remove}=use(BoardContext)
 
  const handelRemoveButtonClick=(e:MouseEvent<HTMLButtonElement>) :void=>{
    e.stopPropagation()
    remove?.(listId,item.id)
  }
  
  return (
    <div
      className={styles["list-item"]}
      onClick={() => onclick?.(listId, item.id)}
    >
      {item.title}
      <IconButton className={styles["remove-icon"]} onClick={handelRemoveButtonClick}>
        <MingcuteDelete2Line/>
      </IconButton>
    </div>
  );
}
