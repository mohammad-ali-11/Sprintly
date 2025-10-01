import { type ReactNode, useMemo, useState } from "react";

import IconButton from "@/components/IconButton/IconButton";
import List from "@/components/list/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import type { ListType } from "@/types/list";
import type { ListItemType } from "@/types/list.item";

import styles from "./BoardLists.module.css";

function cb(a: ListItemType, b: ListItemType): number {
  return a.title.localeCompare(b.title);
}
export default function BoardLists(): ReactNode {
  const [todoList] = useState<ListType>({
    id: "1",
    title: "🔜 To Do",
    items: [
      {
        id: "item-1",
        title: "Implement Landing Page",
      },
      {
        id: "item-2",
        title: "Amplement Search Page",
      },
      {
        id: "item-3",
        title: "Navbar Component",
      },
    ],
  });
  const [doingList] = useState<ListType>({
    id: "1",
    title: "🔨 Doing",
    items: [
      {
        id: "item-1",
        title: "hello Search Page",
      },
      {
        id: "item-2",
        title: "bavbar Component",
      },
    ],
  });
  const SortToDoList = useMemo(() => {
    return { ...todoList, items: [...todoList.items.sort(cb)] };
  }, [todoList]);
  const SortDoingList = useMemo(() => {
    return { ...doingList, items: [...doingList.items.sort(cb)] };
  }, [doingList]);
  const result = useMemo(() => {
    return (todoList.items.length * 2 * 5)
  }, [todoList.items.length]);
  console.log(result);

  const [counter, setCounter] = useState(0);
  return (
    <>
      <div className={styles["board-toolbar"]}>
        <div className={styles.title}>titel</div>
        <div className={styles.actions}>
          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton>
            <MingcuteAddLine onClick={() => setCounter((old) => old + 1)} />
          </IconButton>
        </div>
      </div>

      <ul className={styles["board-lists"]}>
        <li>
          <List list={SortToDoList} />
        </li>
        <li>
          <List list={SortDoingList} />
        </li>
      </ul>
    </>
  );
}
