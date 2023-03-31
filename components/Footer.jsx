import styles from "../styles/Layout.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.implementation}>
        <h5>Implemented with Next.JS</h5>
      </div>
      <div className={styles.copyright}>
        <h5>All rights reserved. </h5>
        <h6>FullScale 2023</h6>
      </div>
      <div className={styles.developer}>
        <h6>Developed by Dominic</h6>
        <h6>Full Scale Developer</h6>
      </div>
    </div>
  );
}
