import { type ComponentProps, type MouseEvent, type ReactNode, useRef } from "react";

import clsx from "clsx";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";

import IconButton from "../IconButton/IconButton";

import styles from "./Modal.module.css";

type props = ComponentProps<"dialog"> & {
  heading: string;
};
export default function Modal({
  className,
  children,
  heading,
   onClick,
  ...otherProps
}: props): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);
  const handelclickDialog=(e:MouseEvent<HTMLDialogElement>):void=>{
    console.log(e.target);
    console.log(e.currentTarget);
    
    
 if (e.target===e.currentTarget) {
   ref.current?.close();
 }
 onClick?.(e)
  }
  
  const handelCloseButtonClick = (): void => {
    ref.current?.close();
  };
  return (
    <>
      
      <dialog
        ref={ref}
        onClick={handelclickDialog}
        className={clsx(styles.modal, className)}
        {...otherProps}
      >
        <header>
          <div className={styles.header}>{heading} </div>
          <div className={styles.actions}>
            <IconButton onClick={handelCloseButtonClick}>
              <MingcuteCloseLine />
            </IconButton>
          </div>
        </header>
        <main>{children}</main>
      </dialog>
    </>
  );
}
