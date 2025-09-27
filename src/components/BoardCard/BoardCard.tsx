import type { ReactNode } from "react";
import styles from './BoardCard.module.css'
import clsx from "clsx";
type BoardColor='gray'|'blue'|'green'|'yellow'|'orange'|'red'|'purple'
type props={
id?:number,
title:string,
description:string
color:BoardColor


}
export default function BoardCard({title,description,color}:props):ReactNode {
return <div className={clsx(styles["board-card"],color)}>
     {/* <div className={ clsx(styles.board)}> */}
            <div className={styles.cover}></div>
            <div className={styles.content}>
              <div className={styles.header}>
                <div className={styles.title}>{title}</div> {/* اصلاح titel به title */}
                <a href="./board">view</a>
              </div>
               <p className={styles.description}>
             {description}
            </p>
            </div>
           
          {/* </div> */}
</div>
}