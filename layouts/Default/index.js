import styles from "./style.module.scss";
import Navigation from "../../components/Navigation";

export default function DefaultLayout({ children }) {
  return (
    <div className={styles.layout}>
      <Navigation />
      <div className={styles.content}>{children}</div>
    </div>
  );
}
