import { memo, type ReactNode } from 'react'
import styles from './ListItem.module.css'
import type { ListItemType } from '@/types/list.item'
type props={
    listId:string
    item:ListItemType
    onclick?:(listId: string,ItemId:string)=>void
}
const ListItem= memo(function ListItem({item,onclick,listId}:props):ReactNode {
    
    
    return <div className={styles['list-item']} onClick={()=>onclick?.(listId,item.id)}>
        {item.title}
    </div>
})
export default ListItem