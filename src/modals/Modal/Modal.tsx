import {
  type ComponentProps,
  type MouseEvent,
  type ReactNode,
  type RefObject,
} from "react";

import clsx from "clsx";

import MingcuteCloseLine from "@/icons/MingcuteCloseLine";


import styles from "./Modal.module.css";
import IconButton from "@/components/IconButton/IconButton";

type props = ComponentProps<"dialog"> & {
  heading: string;
  ref: RefObject<HTMLDialogElement | null>;
  contentClassName?: string;
};
export default function Modal({
  className,
  contentClassName,
  children,
  ref,
  heading,
  onClick,
  ...otherProps
}: props): ReactNode {
  const handelclickDialog = (e: MouseEvent<HTMLDialogElement>): void => {
    if (e.target === e.currentTarget) {
      ref?.current?.close();
    } else {
      onClick?.(e);
    }
  };

  const handelCloseButtonClick = (): void => {
    ref.current?.close();
  };
  return (
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
      <main className={contentClassName}>{children}</main>
    </dialog>
  );
}
