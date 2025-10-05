import { type ReactNode, useCallback, useState } from "react";

import List from "@/components/list/list";

import type { ListType } from "@/types/list";

import styles from "./BoardLists.module.css";
import { listData } from "@/data/list-data";

export default function BoardLists(): ReactNode {
  const [list,setList]=useState<ListType[]>(listData)
 
  const handelListItemClick = useCallback((id: string):void => {
    setList((old) => {
      const clone={ ...old[0], items:[...old[0].items].filter((item) => item.id != id) };
      return [clone,old[1],old[2]]
    });
  }, []);

  return (
    <ul className={styles["board-lists"]}>
      <li>
        <List list={list[0]} onclick={handelListItemClick} />
      </li>
      <li>
        <List list={list[1]} onclick={handelListItemClick} />
      </li>
       <li>
        <List list={list[2]} onclick={handelListItemClick} />
      </li>
    </ul>
  );
}
