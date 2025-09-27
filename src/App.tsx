import type { ReactNode } from "react";


import styles from "./App.module.css";

import BoardCard from "./components/BoardCard/BoardCard";
import Button from "./components/Button/Button";

export default function App(): ReactNode {
  return <div className={styles.app}>
  <header>header</header>
 <main>
      <div className={styles.header}>
        <h1 className={styles.title}>Boards</h1> {/* اصلاح titel به title */}
        <Button color="primary" >create</Button>
      </div>
      <ul className={styles.boards}>
        <li>
         <BoardCard
           title='board1'
            color="yellow"
             description='temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?'/>
        </li>
        <li>
         
          <BoardCard
          title='board2'
          color="red"
          description='Adipisicing elit. Quasi veniam ipsa quidem quia beatae harum voluptate
              aperiam qui temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?'
          />
        </li>
        <li>
          <BoardCard
           title='board3'
            color="blue"
             description='temporibus ab officiis sunt aliquam voluptatibus, non consequuntur
              obcaecati atque. Non, dolorem?'/>
        </li>
      </ul>
      <footer className={styles.footer}>footer</footer>
    </main>

  <footer>footer</footer>
    </div>
 
}
