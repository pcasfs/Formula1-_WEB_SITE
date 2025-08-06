import styles from "./Drivers.module.css";
import { useDriverStore } from "../../store/useDriverStore";
import { useEffect } from "react";
import Skeletons from "../../components/Skeletons/Skeletons";
import { useNavigate } from "react-router-dom";
import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";

export default function Drivers() {
  const navigate = useNavigate();

  const { data: driverData, isLoading, isError } = useGetRankingDrivers(2025);
  const setDrivers = useDriverStore((state) => state.setDrivers);
  const driverCount = driverData?.length;

  useEffect(() => {
    if (driverData) {
      setDrivers(driverData);
    }
  }, [driverData, setDrivers]);

  if (isError) return <div>오류 발생!</div>;

  return (
    <div className={styles["driver-list"]}>
      {isLoading
        ? Array.from({ length: driverCount || 21 }).map((_, idx) => (
            <div key={idx} className={styles["driver-card"]}>
              <Skeletons width={270} height={456} borderRadius={12} />
            </div>
          ))
        : driverData?.map((driver) => (
            <div
              onClick={() => navigate(`/drivers/${driver.driver.id}`)}
              key={driver.driver.id}
              className={styles["driver-card"]}
            >
              <header className={styles["driver-card__header"]}>
                <p className={styles["driver-card__ranking"]}>
                  {driver.position}
                </p>
                <p className={styles["driver-card__points"]}>
                  {driver.points ?? 0} 포인트
                </p>
              </header>
              <img
                className={styles["driver-card__image"]}
                src={driver.driver.image}
                alt={driver.driver.name}
              />
              <p className={styles["driver-card__team"]}>
                팀: {driver.team.name}
              </p>
              <p className={styles["driver-card__name"]}>
                이름: {driver.driver.name}
              </p>
            </div>
          ))}
    </div>
  );
}
