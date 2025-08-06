import { useParams } from "react-router-dom";
import useGetDriverDetail from "./hooks/useGetDriversDetail";
import { useDriverStore } from "../../store/useDriverStore";
import styles from "./DriverDetail.module.css";

export default function DriverDetail() {
  const { id } = useParams<{ id: string }>();
  const driverId = Number(id);

  const { data: driverDetailData } = useGetDriverDetail(driverId);
  const driverList = useDriverStore((state) => state.drivers);
  const rankingData = driverList.find((item) => item.driver.id === driverId);

  return (
    <div className={styles["driver-detail"]}>
      <section className={styles["driver-detail__profile"]}>
        <img
          className={styles["driver-detail__image"]}
          src={driverDetailData?.image}
          alt={driverDetailData?.name}
        />
        <div>
          <h1>{driverDetailData?.name}</h1>
          <p>
            <span className={styles["driver-detail__label"]}>팀:</span>
            <span className={styles["driver-detail__value"]}>
              {rankingData?.team.name}
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>국가:</span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.country.name}
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>차량번호:</span>
            <span className={styles["driver-detail__value"]}>
              #{driverDetailData?.number}
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>태어난 곳:</span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.birthplace}
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>생년월일:</span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.birthdate}
            </span>
          </p>
        </div>
      </section>

      <div className={styles["driver-detail__summary"]}>
        <section className={styles["driver-detail__season"]}>
          <h2>2025 시즌</h2>
          <p>
            <span className={styles["driver-detail__label"]}>시즌 포인트:</span>
            <span className={styles["driver-detail__value"]}>
              {rankingData?.points ?? 0}점
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>현재 순위:</span>
            <span className={styles["driver-detail__value"]}>
              {rankingData?.position}위
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>
              올 시즌 우승 횟수:
            </span>
            <span className={styles["driver-detail__value"]}>
              {rankingData?.wins}회
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>
              1위와의 포인트 차이:
            </span>
            <span className={styles["driver-detail__value"]}>
              {rankingData?.behind}점
            </span>
          </p>
        </section>

        <section className={styles["driver-detail__career"]}>
          <h2>커리어 정보</h2>
          <p>
            <span className={styles["driver-detail__label"]}>
              출전 그랑프리:
            </span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.grands_prix_entered}회
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>
              월드 챔피언 타이틀:
            </span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.world_championships}회
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>포디움:</span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.podiums}회
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>
              최고 결승 순위:
            </span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.highest_race_finish.position}위 (X
              {driverDetailData?.highest_race_finish.number})
            </span>
          </p>
          <p>
            <span className={styles["driver-detail__label"]}>통산 점수:</span>
            <span className={styles["driver-detail__value"]}>
              {driverDetailData?.career_points}포인트
            </span>
          </p>
        </section>
      </div>
    </div>
  );
}
