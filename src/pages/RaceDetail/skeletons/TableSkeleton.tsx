import Skeleton from "../../../components/Skeletons/Skeletons";
import styles from "../../../components/Table/CommonTable.module.css";

export default function TableSkeletons() {
  return (
    <table className={styles["ranking-table"]}>
      <thead>
        <tr>
          <th>
            <Skeleton width={20} height={16} />
          </th>
          <th>
            <Skeleton width={40} height={16} />
          </th>
          <th>
            <Skeleton width={10} height={16} />
          </th>
          <th>
            <Skeleton width={20} height={16} />
          </th>
          <th>
            <Skeleton width={10} height={16} />
          </th>
          <th>
            <Skeleton width={40} height={16} />
          </th>
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
                <Skeleton width={32} height={32} borderRadius={20} />
                <Skeleton width={80} height={16} margin="0 0 0 5px" />
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
            <td>
              <Skeleton width={20} height={16} />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
