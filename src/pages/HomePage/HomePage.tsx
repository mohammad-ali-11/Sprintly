import type { ReactNode } from "react";



import styles from "./HomePage.module.css";
import Board from "@/components/Board/Board";

export default function HomePage(): ReactNode {
  return (
    <div className={styles["home-page"]}>
      <Board/>
      {/* <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1> {/* اصلاح titel به title */}
        {/* <Button color="primary">create</Button> */}
      {/* </div> */} 
      {/* <ul className={styles.boards}>
        <li>
          <BoardCard
            id={1}
            title="board1"
            color="yellow"
            description="temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?"
          />
        </li>
        <li>
          <BoardCard
            id={2}
            title="board2"
            color="red"
            description="Adipisicing elit. Quasi veniam ipsa quidem quia beatae harum voluptate
              aperiam qui temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?"
          />
        </li>
        <li>
          <BoardCard
            id={3}
            title="board3"
            color="blue"
            description="temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?"
          />
        </li>
      </ul> */}
    </div>
  );
}
