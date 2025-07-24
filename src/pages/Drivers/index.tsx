// import { useState } from "react";
import useGetDrivers from "./hooks/useGetDrivers";
import styles from "./Drivers.module.css";

export default function Drivers() {
  // const [searchDriver, setSearchDriver] = useState<string | null>("lewi");
  const { data: driverData } = useGetDrivers();

  const sortedDriverData = [...driverData].sort((a, b) => {
    return a.team.name.localeCompare(b.team.name);
  });

  return (
    <div>
      {sortedDriverData?.map((driverData) => (
        <div className={styles.driver__container} key={driverData.driver.id}>
          <div className={styles.deriver__card}>
            <p>{driverData.driver.name}</p>
            <img src={driverData.driver.image} alt={driverData.driver.name} />
            <p>{driverData.team.name}</p>
            <img src={driverData.team.logo} alt={driverData.team.name} />
            <p>{driverData.driver.number}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
