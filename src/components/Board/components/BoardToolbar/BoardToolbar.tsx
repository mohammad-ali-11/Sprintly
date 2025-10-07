
// import { useState, type ReactNode } from 'react'
// import styles from './BoardToolbar.module.css'
// import IconButton from '@/components/IconButton/IconButton'
// import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line'
// import MingcuteAddLine from '@/icons/MingcuteAddLine'
// import Button from '@/components/Button/Button'

// export default function BoardToolbar():ReactNode {
// const[counter,setCounter]=useState(0)
//     return <div className={styles['board-toolbar']}>
//         <div className={styles.title}>titel</div>
//         <div className={styles.actions}>
//             <div className={styles.spacer}>
//                 {}
//                 <Button>Todo</Button>
//                 <Button>Doing</Button>
//                 <Button>Done</Button>
//             </div>
//             <IconButton>
//                 <MingcuteEdit2Line />
//             </IconButton>
//             <IconButton>
//                <MingcuteAddLine onClick={()=>setCounter(old=>old+1)} />
//             </IconButton>
//         </div>
//     </div>
// }