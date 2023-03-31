import Link from "next/link";
import styles from "../styles/ErrorPage.module.css";

export default function ErrorPage() {
  return (
    <div className={styles.errorMain}>
      <div className={styles.errorContent}>
        <h1 className={styles.header}> PAGE NOT FOUND</h1>
        <h5 className={styles.subheader}>Check if you are in the correct page.</h5>
        <Link href="/">Click here to go home</Link>
      </div>
    </div>
  );
}
