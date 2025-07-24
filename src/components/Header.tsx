import { Link } from "react-router-dom";
import f1__logo from "../image/f1__logo.jpg";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <div className={styles.container__header}>
      <button>
        <img className={styles.f1__logo} src={f1__logo} alt="f1__logo" />
      </button>

      <nav className={styles.wrapper__menu}>
        <Link className={styles.menu_link} to="/drivers">
          드라이버
        </Link>
        <Link className={styles.menu_link} to="/teams">
          팀
        </Link>
        <Link className={styles.menu_link} to="/ranking">
          랭킹
        </Link>
        <Link className={styles.menu_link} to="/races">
          경기일정
        </Link>
      </nav>
    </div>
  );
}
