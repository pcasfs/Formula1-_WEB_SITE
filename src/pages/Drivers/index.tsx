import styles from "./Drivers.module.css";
import Skeletons from "../../components/Skeletons/Skeletons";
import { Link } from "react-router-dom";
import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";
import { CURRENT_YEAR } from "../../constants/currentYear";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";

export default function Drivers() {
  const {
    data: driverData,
    isLoading,
    isError,
  } = useGetRankingDrivers(CURRENT_YEAR);
  const driverCount = driverData?.length;

  if (isError) return <div>오류 발생!</div>;
  if (isLoading)
    return (
      <div className={styles["driver-list"]}>
        {Array.from({ length: driverCount || 20 }).map((_, idx) => (
          <div
            key={idx}
            className={`${styles["driver-card"]} ${styles["driver-card--skeleton"]}`}
          >
            <Skeletons width="100%" height="100%" borderRadius={12} />
          </div>
        ))}
      </div>
    );

  return (
    <div className={styles["driver-list"]}>
      {driverData?.map((driver) => (
        <Link
          to={`/drivers/${driver.driver.id}?season=${CURRENT_YEAR}`}
          key={driver.driver.id}
          className={styles["driver-card"]}
        >
          <header className={styles["driver-card__header"]}>
            <p className={styles["driver-card__ranking"]}>{driver.position}</p>
            <p className={styles["driver-card__points"]}>
              {driver.points ?? 0} 포인트
            </p>
          </header>
          <img
            className={styles["driver-card__image"]}
            src={driver.driver.image ?? FALLBACK_IMAGES.driver}
            onError={(e) => {
              e.currentTarget.src = FALLBACK_IMAGES.driver;
            }}
            alt={driver.driver.name}
          />
          <p className={styles["driver-card__team"]}>팀: {driver.team.name}</p>
          <p className={styles["driver-card__name"]}>
            이름: {driver.driver.name}
          </p>
        </Link>
      ))}
    </div>
  );
}
