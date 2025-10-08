import {
  type ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import List from "@/components/list/list";

import { listData } from "@/data/list-data";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import type { ListType } from "@/types/list";

import styles from "./BoardLists.module.css";

function save(list: ListType[]): void {
  localStorage.setItem("list", JSON.stringify(list));
}
function load(): ListType[] {
  const item = localStorage.getItem("list");
  if (!item) {
    return listData;
  }
  return JSON.parse(item);
}
export default function BoardLists(): ReactNode {
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const [list, setList] = useState<ListType[]>(load);

  useEffect(() => {
    save(list);
  }, [list]);
  const handelListItemClick = useCallback(
    (listId: string, ItemId: string): void => {
      setActiveListId(listId);
      setActiveItemId(ItemId);
    },
    [],
  );
  useEffect(() => {
    document.addEventListener("keydown", (e) => {
   
      console.log('ee');
      if (e.code !== "Escape") {
       return
      }
       setActiveListId(null);
        setActiveItemId(null);
    });
  }, []);

  const handelRemveButtonClick = useCallback((): void => {
    try {
      setList((old) => {
        const activeListIndex = old.findIndex(
          (list) => list.id === activeListId,
        );
        if (activeListIndex === -1) {
          console.error("cannot find desired list");

          return old;
        }
        const clone = [...old];
        const activeList = {
          ...clone[activeListIndex],
          items: [...clone[activeListIndex].items],
        };

        const activeItemIndex = activeList.items.findIndex(
          (item) => item.id === activeItemId,
        );
        if (activeItemIndex === -1) {
          console.error("cannot find desired Item");

          return old;
        }
        activeList.items.splice(activeItemIndex, 1);
        clone[activeListIndex] = activeList;
        save(clone);
        return clone;
      });
    } finally {
      setActiveListId(null);
      setActiveItemId(null);
    }
  }, [activeItemId, activeListId]);

  const handelAddButtonclick = useCallback(() => {
    setList((old) => {
      const clone = [...old];
      const id = globalThis.crypto.randomUUID();

      clone[0] = { ...clone[0], items: [...clone[0].items, { id, title: id }] };

      return clone;
    });
  }, []);

  const handelMoveButtonClick = useCallback(
    (destinationlistId: string): void => {
      try {
        setList((old) => {
          const activeListIndex = old.findIndex(
            (list) => list.id === activeListId,
          );
          const destinationListIndex = old.findIndex(
            (list) => list.id === destinationlistId,
          );
          if (activeListIndex === -1 || destinationListIndex === -1) {
            console.error("cannot find desired list");
            return old;
          }
          const clone = [...old];
          const activeList = {
            ...clone[activeListIndex],
            items: [...clone[activeListIndex].items],
          };
          const destinationList = {
            ...clone[destinationListIndex],
            items: [...clone[destinationListIndex].items],
          };

          const activeItemIndex = activeList.items.findIndex(
            (item) => item.id === activeItemId,
          );
          if (activeItemIndex === -1) {
            console.error("cannot find desired Item");
            return old;
          }
          const [activesItem] = activeList.items.splice(activeItemIndex, 1);
          destinationList.items.push(activesItem);
          clone[activeListIndex] = activeList;
          clone[destinationListIndex] = destinationList;

          return clone;
        });
      } finally {
        setActiveListId(null);
        setActiveItemId(null);
      }
    },
    [activeItemId, activeListId],
  );

  const editIcon = useMemo(() => <MingcuteEdit2Line />, []);
  const addIcon = useMemo(() => <MingcuteAddLine />, []);

  return (
    <>
      <div className={styles["board-toolbar"]}>
        <div className={styles.title}>titel</div>
        <div className={styles.actions}>
          <div className={styles.spacer}>
            {activeListId !== null &&
              list
                .filter((list) => list.id !== activeListId)
                .map((list) => (
                  <Button
                    key={list.id}
                    onClick={() => handelMoveButtonClick(list.id)}
                  >
                    {list?.title}
                  </Button>
                ))}
            <Button onClick={handelRemveButtonClick}>remove</Button>
          </div>
          <IconButton>{editIcon}</IconButton>
          <IconButton onClick={handelAddButtonclick}>{addIcon}</IconButton>
        </div>
      </div>
      <ul className={styles["board-lists"]}>
        {list.map((item) => (
          <li key={item?.id}>
            <List list={item} onclick={handelListItemClick} />
          </li>
        ))}
      </ul>
    </>
  );
}
