import clsx from "clsx";
import type { ComponentProps, ReactNode } from "react";
import styles from './Button.module.css'

type props = ComponentProps<'button'>&{
    varient?:'outlined'|'solid'
    color?:'primary'|'default',

    
}

export default function Button({children,color='default',varient='solid',className,...otherProps}:props):ReactNode {
    return(
        <button {...otherProps}  className={clsx(styles.button,styles[varient],styles[color],className)}>
            {children}
        </button>
    )

}