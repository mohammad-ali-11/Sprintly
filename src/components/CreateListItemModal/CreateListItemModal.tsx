import type { ComponentProps, ReactNode } from "react";
import Modal from "../Modal/Modal";
import styles from './CreateListItemModal.module.css'
import TextInput from "../TextInput/TextInput";
import Button from "../Button/Button";
import clsx from "clsx";
type props=Omit<ComponentProps<typeof Modal>,'children' |'heading'>
export default function CreateListItemModal({ref,contentClassName,...otherProps}:props):ReactNode {
    
    return <Modal ref={ref} heading='create new item' contentClassName={clsx(styles['create-list-item-modal'],contentClassName)} {...otherProps}>
        <form action="">
            <TextInput label='titel'/>
            <div className={styles.actions}>
                <Button color="primary">submit</Button>
                 <Button type="button">cancel</Button>
            </div>
        </form>
    </Modal>
}