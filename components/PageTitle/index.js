import styles from "./style.module.scss";

export default function PageTitle({ children }) {
  return <div className={styles.title}>{children}</div>;
}
