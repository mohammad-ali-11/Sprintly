import { type ComponentProps, type ReactNode, useRef } from "react";

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
  ...otherProps
}: props): ReactNode {
  const ref = useRef<HTMLDialogElement>(null);
  
  const handelCloseButtonClick = (): void => {
    ref.current?.close();
  };
  return (
    <>
      
      <dialog
        ref={ref}
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
