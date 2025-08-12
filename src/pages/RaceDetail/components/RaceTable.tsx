import useGetRaceResult from "../hooks/useGetRaceResult";
import styles from "../../../components/Table/CommonTable.module.css";
import TableSkeletons from "../skeletons/TableSkeleton";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../../constants/currentYear";

export default function RaceTable({ raceId }: { raceId: number }) {
  const { data: raceResultData, isLoading, isError } = useGetRaceResult(raceId);

  if (isError) return <div>오류 발생!</div>;
  if (isLoading) return <TableSkeletons />;

  return (
    <table className={styles["ranking-table"]}>
      <thead>
        <tr>
          <th>순위</th>
          <th>드라이버</th>
          <th>팀</th>
          <th>시간</th>
          <th>랩</th>
          <th>피트스탑</th>
        </tr>
      </thead>
      <tbody>
        {raceResultData?.map((driver) => (
          <tr key={driver.driver.id}>
            <td>{driver.position}</td>
            <td>
              <div className={styles["ranking-table__driver-info"]}>
                <Link
                  to={`/drivers/${driver.driver.id}?season=${CURRENT_YEAR}`}
                >
                  <img src={driver.driver.image} alt={driver.driver.name} />
                  <span>{driver.driver.name}</span>
                </Link>
              </div>
            </td>
            <td>
              <Link to={`/teams/${driver.team.id}?season=${CURRENT_YEAR}`}>
                {driver.team.name}
              </Link>
            </td>
            <td>{driver.time}</td>
            <td>{driver.laps}</td>
            <td>{driver.pits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
