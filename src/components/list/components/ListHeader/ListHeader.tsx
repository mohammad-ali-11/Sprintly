import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import CreateListItemModal from "@/components/CreateListItemModal/CreateListItemModal";
import IconButton from "@/components/IconButton/IconButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import styles from "./ListHeader.module.css";

type props = {
  title: string;
  listIndex: number;
  listeners?: SyntheticListenerMap;
};
export default function ListHeader({
  listeners,
  title,
  listIndex,
}: props): ReactNode {
  const mogalRef = useRef<HTMLDialogElement>(null);
  const handelClickButton = (): void => {
    mogalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["darg-handler"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <IconButton onClick={handelClickButton}>
          <MingcuteAddLine />
        </IconButton>
        <IconButton>
          <MingcuteMore1Line />
        </IconButton>
      </div>
      <CreateListItemModal ref={mogalRef} listIndex={listIndex} />
    </div>
  );
}
