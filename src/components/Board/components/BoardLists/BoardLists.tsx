import type { ReactNode } from "react";

import IconButton from "@/components/IconButton/IconButton";

import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import styles from "./BoardLists.module.css";

export default function BoardLists(): ReactNode {
  return (
    <ul className={styles["board-lists"]}>
      <li>
        <div className={styles.list}>
          <div className={styles.header}>
            <div className={styles.title}>🔜 To Do</div>
            <IconButton>
              <MingcuteMore1Line />
            </IconButton>
          </div>
          <ul className={styles.items}>
            <li><div className={styles.item}>متن اول</div></li>
            <li><div className={styles.item}>متن دوم</div></li>
            <li><div className={styles.item}>متن سوم</div></li>
            <li><div className={styles.item}>متن چهارم</div></li>
          </ul>
        </div>
      </li>
      
      

    </ul>
  );
}
