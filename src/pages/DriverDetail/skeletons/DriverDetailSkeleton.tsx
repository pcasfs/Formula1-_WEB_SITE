import styles from "../DriverDetail.module.css";
import Skeletons from "../../../components/Skeletons/Skeletons";

export default function DriverDetailSkeleton() {
  return (
    <div className={styles["driver-detail"]}>
      <section className={styles["driver-detail__profile"]}>
        <Skeletons
          className={styles["driver-detail__image"]}
          width={360}
          height={380}
          borderRadius={12}
        />
        <ul className={styles["driver-detail__info-list"]} aria-hidden="true">
          <li>
            <Skeletons width="60%" height={18} />
          </li>
          <li>
            <Skeletons width="55%" height={18} />
          </li>
          <li>
            <Skeletons width="50%" height={18} />
          </li>
          <li>
            <Skeletons width="58%" height={18} />
          </li>
          <li>
            <Skeletons width="40%" height={18} />
          </li>
        </ul>
      </section>

      <div className={styles["driver-detail__sections"]}>
        <section className={styles["driver-detail__season"]}>
          <h2>2025 시즌</h2>
          <ul className={styles["driver-detail__info-list"]} aria-hidden="true">
            <li>
              <Skeletons width="60%" height={18} />
            </li>
            <li>
              <Skeletons width="55%" height={18} />
            </li>
            <li>
              <Skeletons width="62%" height={18} />
            </li>
            <li>
              <Skeletons width="70%" height={18} />
            </li>
          </ul>
        </section>

        <section className={styles["driver-detail__career"]}>
          <h2>커리어 정보</h2>
          <ul className={styles["driver-detail__info-list"]} aria-hidden="true">
            <li>
              <Skeletons width="65%" height={18} />
            </li>
            <li>
              <Skeletons width="50%" height={18} />
            </li>
            <li>
              <Skeletons width="55%" height={18} />
            </li>
            <li>
              <Skeletons width="72%" height={18} />
            </li>
            <li>
              <Skeletons width="48%" height={18} />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
