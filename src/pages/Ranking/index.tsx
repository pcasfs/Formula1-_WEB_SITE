import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";
import { useState } from "react";
import styles from "./Ranking.module.css";
import useGetRankingTeams from "../../hooks/useGetRankingTeams";
import DriverTable from "./components/DriverTable";
import TeamTable from "./components/TeamTable";
import DriverTableSkeleton from "./skeletons/DriverTableSkeleton";
import TeamTableSkeleton from "./skeletons/TeamTableSkeleton";

export default function Ranking() {
  const [tab, setTab] = useState<"driver" | "team">("driver");

  const [season, setSeason] = useState(2025);
  const options = [2025, 2024, 2023, 2022, 2021];

  const { data: driverData, isLoading: isDriverLoading } =
    useGetRankingDrivers(season);
  const { data: teamData, isLoading: isTeamLoading } =
    useGetRankingTeams(season);

  return (
    <div className={styles["ranking-page"]}>
      <div className={styles["ranking-page__header"]}>
        {tab === "driver" ? (
          <h1>{season}년 드라이버 순위</h1>
        ) : (
          <h1>{season}년 팀 순위</h1>
        )}
        <select
          className={styles["ranking-page__select"]}
          value={season}
          onChange={(e) => setSeason(Number(e.target.value))}
        >
          {options.map((year) => (
            <option key={year} value={year}>
              {year}년
            </option>
          ))}
        </select>
      </div>

      <div className={styles["ranking-page__tab"]}>
        <button
          onClick={() => setTab("driver")}
          className={`${styles["ranking-page__button"]} ${
            tab === "driver" ? styles["ranking-page__button--active"] : ""
          }`}
        >
          드라이버
        </button>
        <button
          onClick={() => setTab("team")}
          className={`${styles["ranking-page__button"]} ${
            tab === "team" ? styles["ranking-page__button--active"] : ""
          }`}
        >
          팀
        </button>
      </div>

      {tab === "driver" ? (
        isDriverLoading ? (
          <DriverTableSkeleton />
        ) : (
          <DriverTable driverData={driverData!} />
        )
      ) : isTeamLoading ? (
        <TeamTableSkeleton />
      ) : (
        <TeamTable teamData={teamData!} />
      )}
    </div>
  );
}
