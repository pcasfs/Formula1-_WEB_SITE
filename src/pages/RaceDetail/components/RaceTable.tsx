import useGetRaceResult from "../hooks/useGetRaceResult";
import styles from "../../../components/Table/CommonTable.module.css";

export default function RaceTable({ raceId }: { raceId: number }) {
  const { data: raceResultData } = useGetRaceResult(raceId);

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
                <img src={driver.driver.image} alt={driver.driver.name} />
                <span>{driver.driver.name}</span>
              </div>
            </td>
            <td>{driver.team.name}</td>
            <td>{driver.time}</td>
            <td>{driver.laps}</td>
            <td>{driver.pits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
