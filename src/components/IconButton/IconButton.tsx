import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import styles from './IconButton.module.css'

type props = ComponentProps<'button'>

export default function IconButton({children,className,...otherProps}:props):ReactNode {
    return(
        <button {...otherProps}  className={clsx(styles["icon-button"],className)}>
            {children}
        </button>
    )

}