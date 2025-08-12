import styles from "../TeamDetail.module.css";
import Skeletons from "../../../components/Skeletons/Skeletons";

export default function TeamDetailSkeleton() {
  return (
    <div className={styles["team-detail"]}>
      <section className={styles["team-detail__card"]}>
        <div className={styles["team-detail__card-left"]}>
          <header className={styles["team-detail__card-header"]}>
            <Skeletons width={100} height={60} />
            <Skeletons width={250} height={32} margin="0 0 0 10px" />
          </header>

          <ul className={styles["team-detail__info-list"]}>
            <li>
              <Skeletons width="60%" height={18} />
            </li>
            <li>
              <Skeletons width="65%" height={18} />
            </li>
            <li>
              <Skeletons width="55%" height={18} />
            </li>
            <li>
              <Skeletons width="62%" height={18} />
            </li>
          </ul>
        </div>

        <div className={styles["team-detail__card-right"]}>
          <div className={styles["driver-profile"]}>
            <Skeletons width={200} height={220} borderRadius={10} />
            <Skeletons width="70%" height={16} margin="8px 0 0 0" />
          </div>
          <div className={styles["driver-profile"]}>
            <Skeletons width={200} height={220} borderRadius={10} />
            <Skeletons width="70%" height={16} margin="8px 0 0 0" />
          </div>
        </div>
      </section>

      <div className={styles["team-detail__sections"]}>
        <section>
          <h2>팀 차량 정보</h2>
          <Skeletons
            width={500}
            height={120}
            borderRadius={12}
            margin="15px 0"
          />
          <ul className={styles["team-detail__car-info-list"]}>
            <li>
              <Skeletons width="25%" height={18} />
            </li>
            <li>
              <Skeletons width="35%" height={18} />
            </li>
            <li>
              <Skeletons width="20%" height={18} />
            </li>
          </ul>
        </section>

        <section>
          <h2>팀 상세정보</h2>
          <ul className={styles["team-detail__info-list"]}>
            <li>
              <Skeletons width="65%" height={18} />
            </li>
            <li>
              <Skeletons width="50%" height={18} />
            </li>
            <li>
              <Skeletons width="58%" height={18} />
            </li>
            <li>
              <Skeletons width="60%" height={18} />
            </li>
            <li>
              <Skeletons width="55%" height={18} />
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
