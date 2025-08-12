import { Link } from "react-router-dom";
import type { DriverData } from "../../../api/f1/Ranking/RankingDrivers/entity";
import styles from "../../../components/Table/CommonTable.module.css";

type DriverDataProps = {
  driverData: DriverData[];
  season: number;
};

export default function DriverTable({ driverData, season }: DriverDataProps) {
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
                <Link to={`/drivers/${driver.driver.id}?season=${season}`}>
                  <img src={driver.driver.image} alt={driver.driver.name} />
                  <span>{driver.driver.name}</span>
                </Link>
              </div>
            </td>
            <td>
              <Link to={`/teams/${driver.team.id}?season=${season}`}>
                {driver.team.name}
              </Link>
            </td>
            <td>{driver.points ?? 0}</td>
            <td>{driver.wins}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
