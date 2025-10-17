import type { ReactNode } from "react";
import styles from './RootLayout.module.css'
// import Footer from "@/components/Footer/Footer";
import { Outlet } from "react-router";
import Header from "@/components/Header/Header";
export default function RootLayout():ReactNode {
    return<div className={styles['root-layout']}>
        <Header/>
        <main>
            <Outlet/>
        </main>
        {/* <Footer/> */}
    </div>
    
}