import type { ListType } from '@/types/list'
import styles from './list.module.css'
import { memo, type ReactNode } from 'react'
import IconButton from '../IconButton/IconButton'
import MingcuteMore1Line from '@/icons/MingcuteMore1Line'
import ListItem from '../ListItem/ListItem'
type props={
    list:ListType
    onclick?:(id:string)=>void
}
const List=memo(function List({list,onclick}:props):ReactNode {
  console.log(list.title,'list');
  
    return <div className={styles.list}>
         <div className={styles.header}>
            <div className={styles.title}>{list.title}</div>
            <IconButton>
              <MingcuteMore1Line />
            </IconButton>
          </div>
          <ul className={styles.items}>
            {
                list.items.map((item)=>(
                <li key={item.id}><ListItem item={item} onclick={onclick}/></li>
           
                ))
            }
          
          </ul>
    </div>
})
export default List