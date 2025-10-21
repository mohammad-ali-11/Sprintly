import type { ReactNode } from "react";

import { Link } from "react-router";

import styles from "./Header.module.css";

export default function Header(): ReactNode {
  return (
    <header className={styles.header}>
      <Link to="/" className={styles.logo}>
        <img src="/public/Sprintly.png" alt="logo" />
      </Link>
    </header>
  );
}
