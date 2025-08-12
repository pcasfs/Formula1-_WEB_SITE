import { Link } from "react-router-dom";
import f1__logo from "../../asset/images/f1__logo.jpg";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link to={"/"}>
        <img className={styles["header__logo"]} src={f1__logo} alt="f1 logo" />
      </Link>

      <nav className={styles["header__menu"]}>
        <Link className={styles["header__menu-link"]} to="/drivers">
          드라이버
        </Link>
        <Link className={styles["header__menu-link"]} to="/teams">
          팀
        </Link>
        <Link className={styles["header__menu-link"]} to="/ranking">
          랭킹
        </Link>
        <Link className={styles["header__menu-link"]} to="/schedule">
          경기일정
        </Link>
      </nav>
    </div>
  );
}
