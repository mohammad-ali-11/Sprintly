import { type ReactNode, use } from "react";

import { BoardContext } from "@/contect/board-context";

import Button from "@/components/Button/Button";
import IconButton from "@/components/IconButton/IconButton";
import List from "@/components/list/list";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteEdit2Line from "@/icons/MingcuteEdit2Line";

import styles from "./BoardLists.module.css";
import { ActiveItemContext } from "@/contect/active-item-context";

export default function BoardLists(): ReactNode {

  const { list, create, move } = use(BoardContext);
  const {activeListId,activeItemId,deactive}=use(ActiveItemContext )
  
  const handelMoveButtonClick = (tolistId: string): void => {
    if (activeListId && activeItemId) {
      move(activeListId, activeItemId, tolistId);
    }
    deactive()
   
  };
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
            />
          </li>
        ))}
      </ul>
    </>
  );
}
