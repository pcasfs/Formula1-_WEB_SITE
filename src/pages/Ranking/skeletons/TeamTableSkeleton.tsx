import Skeleton from "../../../components/Skeletons/Skeletons";
import styles from "../components/TeamTable.module.css";

export default function TeamTableSkeleton() {
  return (
    <table className={styles["ranking-table__team"]}>
      <thead>
        <tr>
          <th>순위</th>
          <th>팀</th>
          <th>포인트</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }).map((_, idx) => (
          <tr key={idx}>
            <td>
              <Skeleton width={24} height={20} />
            </td>
            <td>
              <div className={styles["ranking-table__team-info"]}>
                <Skeleton width={230} height={100} />
                <Skeleton width={80} height={20} />
              </div>
            </td>
            <td>
              <Skeleton width={40} height={20} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
