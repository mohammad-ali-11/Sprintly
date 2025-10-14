import { type MouseEvent, type ReactNode, use } from "react";

import { toast } from "react-toastify";

import { BoardContext } from "@/contect/board-context";

import MingcuteDelete2Line from "@/icons/MingcuteDelete2Line";

import type { ListItemType } from "@/types/list.item";

import IconButton from "../IconButton/IconButton";

import styles from "./ListItem.module.css";

type props = {
  listId: string;
  item: ListItemType;
};
export default function ListItem({ item, listId }: props): ReactNode {
  const { dispatchList } = use(BoardContext);
  const handelRemoveButtonClick = (e: MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    dispatchList({ type: "removed", listId, ItemId: item.id });

    toast.success("Iteam remove succeddfully");
  };

  return (
    <div className={styles["list-item"]}>
      {item.title}
      <IconButton
        className={styles["remove-icon"]}
        onClick={handelRemoveButtonClick}
      >
        <MingcuteDelete2Line />
      </IconButton>
    </div>
  );
}
