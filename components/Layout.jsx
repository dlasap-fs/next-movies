import Footer from "./Footer";
import NavBar from "./NavBar";
import styles from "../styles/Layout.module.css";
export default function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <NavBar />
      <div className={styles.content}>{children}</div>
      <Footer />
    </div>
  );
}
