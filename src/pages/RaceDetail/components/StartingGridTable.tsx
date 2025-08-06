import useGetStartingGridResult from "../hooks/useGetStartingGridResult";
import styles from "../../../components/Table/CommonTable.module.css";

export default function StartingGridTable({ raceId }: { raceId: number }) {
  const { data: startingGridData } = useGetStartingGridResult(raceId);
  console.log(startingGridData);
  return (
    <table className={styles["ranking-table"]}>
      <thead>
        <tr>
          <th>순위</th>
          <th>드라이버</th>
          <th>팀</th>
          <th>시간</th>
        </tr>
      </thead>
      <tbody>
        {startingGridData?.map((driver) => (
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
          </tr>
        ))}
      </tbody>
    </table>
  );
}
