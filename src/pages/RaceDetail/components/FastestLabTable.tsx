import useGetFastestLabResult from "../hooks/useGetFastestLabResult";
import styles from "../../../components/Table/CommonTable.module.css";
import TableSkeletons from "../skeletons/TableSkeleton";
import { Link } from "react-router-dom";
import { CURRENT_YEAR } from "../../../constants/currentYear";
import { FALLBACK_IMAGES } from "../../../constants/fallbackImages";

export default function FastestLabTable({ raceId }: { raceId: number }) {
  const {
    data: fastestLabData,
    isLoading,
    isError,
  } = useGetFastestLabResult(raceId);

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
          <th>평균 속도 (km/h)</th>
        </tr>
      </thead>
      <tbody>
        {fastestLabData?.map((driver) => (
          <tr key={driver.driver.id}>
            <td>{driver.position}</td>
            <td>
              <div className={styles["ranking-table__driver-info"]}>
                <Link
                  to={`/drivers/${driver.driver.id}?season=${CURRENT_YEAR}`}
                >
                  <img
                    src={driver.driver.image ?? FALLBACK_IMAGES.driver}
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_IMAGES.driver;
                    }}
                    alt={driver.driver.name}
                  />
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
            <td>{driver.lap}</td>
            <td>{driver.avg_speed}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
