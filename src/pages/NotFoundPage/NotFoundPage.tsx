import type { ReactNode } from 'react'
import styles from './NotFoundPage.module.css'
import { Link } from 'react-router'
export default function NotFoundPage():ReactNode {
    return <div className={styles['not-found-page']}>
        <h1>404 | not Fund page</h1>
        <Link to='/'/>
    </div>
}