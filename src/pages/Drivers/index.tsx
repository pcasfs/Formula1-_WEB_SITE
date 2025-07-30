import styles from "./Drivers.module.css";
import { useDriverStore } from "../../store/useDriverStore";
import useGetDrivers from "./hooks/useGetDrivers";
import { useEffect } from "react";
import Skeletons from "../../components/Skeletons/Skeletons";

export default function Drivers() {
  const { data: driverData, isLoading, isError } = useGetDrivers();
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
              <Skeletons width={270} height={410} />
            </div>
          ))
        : driverData?.map((driver) => (
            <div key={driver.driver.id} className={styles["driver-card"]}>
              <header className={styles["driver-card__header"]}>
                <p className={styles["driver-card__ranking"]}>
                  {driver.position}
                </p>
                {driver.points ? (
                  <p className={styles["driver-card__points"]}>
                    {driver.points} 포인트
                  </p>
                ) : (
                  <h3>0 포인트</h3>
                )}
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
