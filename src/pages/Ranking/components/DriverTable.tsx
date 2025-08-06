import type { DriverData } from "../../../api/f1/Ranking/RankingDrivers/entity";
import styles from "../../../components/Table/CommonTable.module.css";

type DriverDataProps = {
  driverData: DriverData[];
};

export default function DriverTable({ driverData }: DriverDataProps) {
  return (
    <table className={styles["ranking-table"]}>
      <thead>
        <tr>
          <th>순위</th>
          <th>드라이버</th>
          <th>팀</th>
          <th>포인트</th>
          <th>우승</th>
        </tr>
      </thead>
      <tbody>
        {driverData?.map((driver) => (
          <tr key={driver.driver.id}>
            <td>{driver.position}</td>
            <td>
              <div className={styles["ranking-table__driver-info"]}>
                <img src={driver.driver.image} alt={driver.driver.name} />
                <span>{driver.driver.name}</span>
              </div>
            </td>
            <td>{driver.team.name}</td>
            <td>{driver.points ?? 0}</td>
            <td>{driver.wins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
