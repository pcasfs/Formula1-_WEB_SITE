import Skeleton from "../../../components/common/Skeletons";
import styles from "../Home.module.css";

export default function HomeSkeleton() {
  return (
    <div className={styles["schedule-summary"]}>
      <div className={styles["schedule-summary__section"]}>
        <h1 className={styles["schedule-summary__title"]}></h1>
        <Skeleton
          width={300}
          height={250}
          borderRadius={12}
          margin={12}
          className={styles["schedule-summary__card"]}
        />
      </div>

      <div
        className={`${styles["schedule-summary__section--highlight"]} ${styles["schedule-summary__section"]}`}
      >
        <h1 className={styles["schedule-summary__title"]}></h1>
        <Skeleton
          width={460}
          height={250}
          borderRadius={12}
          margin={12}
          className={styles["schedule-summary__card"]}
        />
      </div>

      <div className={styles["schedule-summary__section"]}>
        <h1 className={styles["schedule-summary__title"]}></h1>
        <Skeleton
          width={300}
          height={250}
          borderRadius={12}
          margin={12}
          className={styles["schedule-summary__card"]}
        />
      </div>
    </div>
  );
}
