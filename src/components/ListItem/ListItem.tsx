import { memo, type ReactNode } from 'react'
import styles from './ListItem.module.css'
import type { ListItemType } from '@/types/list.item'
type props={
    item:ListItemType
    onclick?:(id:string)=>void
}
const ListItem= memo(function ListItem({item,onclick}:props):ReactNode {
    console.log(item.title,item);
    
    return <div className={styles['list-item']} onClick={()=>onclick(item.id)}>
        {item.title}
    </div>
})
export default ListItem