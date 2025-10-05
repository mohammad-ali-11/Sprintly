import { type ReactNode, useCallback, useState } from "react";

import List from "@/components/list/list";

import type { ListType } from "@/types/list";

import styles from "./BoardLists.module.css";

export default function BoardLists(): ReactNode {
  const [todoList, setTodoList] = useState<ListType>({
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
  // const handeldeleteItemClick=()=>{
  //   setTodoList(...todoList)
  //   const clone={...todoList,items:[...todoList,todoList.id]}
  //   console.log(clone);

  // }
  // const handelListItemClick=useMemo(()=>{
  //  return (id:string)=>{
  // setTodoList((old)=>{
  //   const clone=[...old.items]
  //   return {...old,items:clone.filter((item)=>item.id!=id)}
  // })
  // }
  // },[])
  const handelListItemClick = useCallback((id: string) => {
    setTodoList((old) => {
      const clone = [...old.items];
      return { ...old, items: clone.filter((item) => item.id != id) };
    });
  }, []);

  return (
    <ul className={styles["board-lists"]}>
      <li>
        <List list={todoList} onclick={handelListItemClick} />
      </li>
      <li>
        <List list={doingList} onclick={handelListItemClick} />
      </li>
    </ul>
  );
}
