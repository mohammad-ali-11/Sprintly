import type { ReactNode } from "react";

import type { ListItemType } from "@/types/list.item";

import styles from "./ListItem.module.css";

type props = {
  listId: string;
  item: ListItemType;
  onclick?: (listId: string, ItemId: string) => void;
};
export default function ListItem({ item, onclick, listId }: props): ReactNode {
  return (
    <div
      className={styles["list-item"]}
      onClick={() => onclick?.(listId, item.id)}
    >
      {item.title}
    </div>
  );
}
