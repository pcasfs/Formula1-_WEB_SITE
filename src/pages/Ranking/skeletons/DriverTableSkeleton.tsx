import Skeleton from "../../../components/Skeletons/Skeletons";
import styles from "../../../components/Table/CommonTable.module.css";

export default function DriverTableSkeleton() {
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
        {Array.from({ length: 21 }).map((_, idx) => (
          <tr key={idx}>
            <td>
              <Skeleton width={20} height={20} />
            </td>
            <td>
              <div className={styles["ranking-table__driver-info"]}>
                <Skeleton width={32} height={32} />
                <Skeleton width={80} height={16} />
              </div>
            </td>
            <td>
              <Skeleton width={60} height={16} />
            </td>
            <td>
              <Skeleton width={40} height={16} />
            </td>
            <td>
              <Skeleton width={30} height={16} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
