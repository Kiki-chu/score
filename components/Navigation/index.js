import styles from "./style.module.scss";
import Link from "next/link";

export default function Navigation() {
  return (
    <nav className={styles.navigation}>
      <div className="logo">
        <img src="/images/logo.svg" />
      </div>
      <div className={styles.links}>
        <Link href="/scorecards">
          <a>Scorecards</a>
        </Link>
      </div>
    </nav>
  );
}
