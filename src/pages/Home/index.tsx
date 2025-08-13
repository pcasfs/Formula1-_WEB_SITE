import HomeSchedules from "./components/HomeSchedules";
import Timer from "./components/Timer";
import styles from "./Home.module.css";

export default function Home() {
  return (
    <div className={styles["home-page"]}>
      <HomeSchedules />
      <Timer />
    </div>
  );
}
