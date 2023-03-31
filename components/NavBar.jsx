import Link from "next/link";
import styles from "../styles/Layout.module.css";

export default function NavBar() {
  return (
    <div className={styles.navbar}>
      <Link className={styles.links} href="/">
        Home
      </Link>
      <Link className={styles.links} href="/movies">
        Movies
      </Link>
      <Link className={styles.links} href="/about">
        About
      </Link>
    </div>
  );
}
