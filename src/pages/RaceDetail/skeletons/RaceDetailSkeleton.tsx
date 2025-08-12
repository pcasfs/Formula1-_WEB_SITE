import styles from "../RaceDetail.module.css";
import Skeletons from "../../../components/Skeletons/Skeletons";

export default function RaceDetailSkeleton() {
  return (
    <div className={styles["race-detail"]}>
      <div className={styles["race-detail__title"]}>
        <Skeletons width={24} height={24} borderRadius={50} />
        <Skeletons width={"40%"} height={36} margin={"0 0 0 8px"} />
      </div>

      <section className={styles["race-detail__circuit-section"]}>
        <Skeletons
          className={styles["race-detail__circuit-image"]}
          width="100%"
          height={320}
          borderRadius={50}
        />

        <ul className={styles["race-detail__info-list"]}>
          {Array.from({ length: 8 }).map((_, idx) => (
            <li key={idx} className={styles["race-detail__info-item"]}>
              <Skeletons width={110} height={18} />
              <Skeletons width={"45%"} height={18} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
