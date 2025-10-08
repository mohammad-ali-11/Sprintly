import clsx from "clsx";
import { memo, type ComponentProps, type ReactNode } from "react";
import styles from './IconButton.module.css'

type props = ComponentProps<'button'>

const IconButton=memo( function IconButton({children,className,...otherProps}:props):ReactNode {
    return(
        <button {...otherProps}  className={clsx(styles["icon-button"],className)}>
            {children}
        </button>
    )

})
export default IconButton