import { type ReactNode, useRef } from "react";

import type { SyntheticListenerMap } from "@dnd-kit/core/dist/hooks/utilities";

import IconButton from "@/components/IconButton/IconButton";

import MingcuteAddLine from "@/icons/MingcuteAddLine";
import MingcuteDotsLine from "@/icons/MingcuteDotsLine";
import MingcuteMore1Line from "@/icons/MingcuteMore1Line";

import styles from "./ListHeader.module.css";
import ListItemModal from "@/modals/ListItemModal/ListItemModal";

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
  const modalRef = useRef<HTMLDialogElement>(null);
  const handelCreateButtonClick = (): void => {
    modalRef.current?.showModal();
  };
  return (
    <div className={styles["list-header"]}>
      <div className={styles["darg-handler"]} {...listeners}>
        <MingcuteDotsLine />
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.actions}>
        <IconButton onClick={handelCreateButtonClick}>
          <MingcuteAddLine />
        </IconButton>
        <IconButton>
          <MingcuteMore1Line />
        </IconButton>
      </div>
      <ListItemModal modalRef={modalRef} listIndex={listIndex} />
    </div>
  );
}
