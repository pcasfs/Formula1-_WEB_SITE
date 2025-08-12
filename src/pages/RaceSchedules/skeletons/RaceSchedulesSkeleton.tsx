import styles from "../RaceSchedules.module.css";
import Skeletons from "../../../components/Skeletons/Skeletons";

export default function RaceSchedulesSkeleton() {
  return (
    <div className={styles["race-schedules-page"]}>
      <Skeletons
        width="100%"
        height={70}
        borderRadius={12}
        margin={30}
        className={styles["race-schedules__next-button"]}
      />
      <div className={styles["race-schedules"]}>
        {Array.from({ length: 24 }).map((_, idx) => (
          <div
            key={idx}
            className={`${styles["race-schedules__card"]} ${styles["race-schedules__card--skeleton"]}`}
          >
            <Skeletons width="100%" height={600} borderRadius={12} />
          </div>
        ))}
      </div>
    </div>
  );
}
