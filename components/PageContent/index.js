import styles from "./style.module.scss";

export default function PageContent({ children }) {
  return <div className={styles.content}>{children}</div>;
}
