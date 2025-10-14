import { type ReactNode, use } from "react";

import { BoardContext } from "@/contect/board-context";

import IconButton from "@/components/IconButton/IconButton";
import List from "@/components/list/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardLists.module.css";

export default function BoardLists(): ReactNode {
  const { list } = use(BoardContext);

  return (
    <>
      <div className={styles["board-toolbar"]}>
        <div className={styles.title}>titel</div>
        <div className={styles.actions}>
          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton>
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>
      <ul className={styles["board-lists"]}>
        {list.map((item) => (
          <li key={item?.id}>
            <List list={item} />
          </li>
        ))}
      </ul>
    </>
  );
}
