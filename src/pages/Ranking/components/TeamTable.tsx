import type { TeamData } from "../../../api/f1/Ranking/RankingTeams/entity";
import styles from "./TeamTable.module.css";

type TeamDataProps = {
  teamData: TeamData[];
};

export default function TeamTable({ teamData }: TeamDataProps) {
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
        {teamData?.map((team) => (
          <tr key={team.team.id}>
            <td>{team.position}</td>
            <td>
              <div className={styles["ranking-table__team-info"]}>
                <img src={team.team.logo} alt={team.team.name} />
                <span>{team.team.name}</span>
              </div>
            </td>
            <td>{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
