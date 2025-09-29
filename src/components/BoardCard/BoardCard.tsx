import type { ReactNode } from "react";

import { Link } from "react-router";

import clsx from "clsx";

import styles from "./BoardCard.module.css";

type BoardColor =
  | "gray"
  | "blue"
  | "green"
  | "yellow"
  | "orange"
  | "red"
  | "purple";
type props = {
  id: number;
  title: string;
  description: string;
  color: BoardColor;
};
export default function BoardCard({
  title,
  description,
  color,
  id,
}: props): ReactNode {
  return (
    <div className={clsx(styles["board-card"], color)}>
      {/* <div className={ clsx(styles.board)}> */}
      <div className={styles.cover}></div>
      <div className={styles.content}>
        <div className={styles.header}>
          <div className={styles.title}>{title}</div>{" "}
          {/* اصلاح titel به title */}
          <Link to={`./board/${id}`}>view</Link>
        </div>
        <p className={styles.description}>{description}</p>
      </div>

      {/* </div> */}
    </div>
  );
}
