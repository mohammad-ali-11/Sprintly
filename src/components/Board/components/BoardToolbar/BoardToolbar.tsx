
import type { ReactNode } from 'react'
import styles from './BoardToolbar.module.css'
import IconButton from '@/components/IconButton/IconButton'
import MingcuteEdit2Line from '@/icons/MingcuteEdit2Line'
import MingcuteAddLine from '@/icons/MingcuteAddLine'

export default function BoardToolbar():ReactNode {
    return <div className={styles['board-toolbar']}>
        <div className={styles.title}>titel</div>
        <div className={styles.actions}>
            <IconButton>
                <MingcuteEdit2Line />
            </IconButton>
            <IconButton>
               <MingcuteAddLine />
            </IconButton>
        </div>
    </div>
}