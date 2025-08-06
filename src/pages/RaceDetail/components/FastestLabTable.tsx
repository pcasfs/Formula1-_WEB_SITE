import useGetFastestLabResult from "../hooks/useGetFastestLabResult";
import styles from "../../../components/Table/CommonTable.module.css";

export default function FastestLabTable({ raceId }: { raceId: number }) {
  const { data: fastestLabData } = useGetFastestLabResult(raceId);
  return (
    <table className={styles["ranking-table"]}>
      <thead>
        <tr>
          <th>순위</th>
          <th>드라이버</th>
          <th>팀</th>
          <th>시간</th>
          <th>랩</th>
          <th>평균 속도 (km/h)</th>
        </tr>
      </thead>
      <tbody>
        {fastestLabData?.map((driver) => (
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
            <td>{driver.lap}</td>
            <td>{driver.avg_speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
