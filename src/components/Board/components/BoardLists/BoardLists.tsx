import { type ReactNode, useContext, useEffect, useState } from "react";

import { BoardContext } from "@/contect/board-context";

import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import List from "@/components/list/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardLists.module.css";

export default function BoardLists(): ReactNode {
  const [activeListId, setActiveListId] = useState<string | null>(null);
  const [activeItemId, setActiveItemId] = useState<string | null>(null);
  const { list, create, move, remove } = useContext(BoardContext);

  const handelListItemClick = (listId: string, ItemId: string): void => {
    setActiveListId(listId);
    setActiveItemId(ItemId);
  };

  const handelRemveButtonClick = (listId: string, ItemId: string): void => {
    remove(listId, ItemId);
  };

  const handelMoveButtonClick = (tolistId: string): void => {
    if (activeListId && activeItemId) {
      move(activeListId, activeItemId, tolistId);
    }
    setActiveListId(null);
    setActiveItemId(null);
  };

  useEffect(() => {
    const handelDocumentKeydown = (e: KeyboardEvent): void => {
      console.log("ee");
      if (e.code !== "Escape") {
        return;
      }
      setActiveListId(null);
      setActiveItemId(null);
    };
    document.addEventListener("keydown", handelDocumentKeydown);
    return (): void => {
      document.removeEventListener("keydown", handelDocumentKeydown);
    };
  }, []);

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
          </div>
          <IconButton>
            <MingcuteEdit2Line />
          </IconButton>
          <IconButton onClick={() => create()}>
            <MingcuteAddLine />
          </IconButton>
        </div>
      </div>
      <ul className={styles["board-lists"]}>
        {list.map((item) => (
          <li key={item?.id}>
            <List
              list={item}
              onclick={handelListItemClick}
              onRemove={handelRemveButtonClick}
            />
          </li>
        ))}
      </ul>
    </>
  );
}
