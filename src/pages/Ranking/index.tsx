import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";
import { useEffect, useState } from "react";
import styles from "./Ranking.module.css";
import useGetRankingTeams from "../../hooks/useGetRankingTeams";
import DriverTable from "./components/DriverTable";
import TeamTable from "./components/TeamTable";
import DriverTableSkeleton from "./skeletons/DriverTableSkeleton";
import TeamTableSkeleton from "./skeletons/TeamTableSkeleton";
import { useSearchParams } from "react-router-dom";
import { CURRENT_YEAR } from "../../constants/currentYear";

export default function Ranking() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSeason = Number(searchParams.get("season")) || CURRENT_YEAR;

  const [tab, setTab] = useState<"driver" | "team">("driver");

  const [season, setSeason] = useState(initialSeason);
  const options = Array.from({ length: 10 }, (_, idx) => CURRENT_YEAR - idx);

  useEffect(() => {
    const next = new URLSearchParams(searchParams);
    next.set("season", String(season));
    setSearchParams(next, { replace: true });
  }, [season, searchParams, setSearchParams]);

  const {
    data: driverData,
    isLoading: isDriverLoading,
    isError: isDriverError,
  } = useGetRankingDrivers(season);
  const {
    data: teamData,
    isLoading: isTeamLoading,
    isError: isTeamError,
  } = useGetRankingTeams(season);

  if (isDriverError || isTeamError) return <div>오류 발생!</div>;

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
          <DriverTable season={season} driverData={driverData!} />
        )
      ) : isTeamLoading ? (
        <TeamTableSkeleton />
      ) : (
        <TeamTable season={season} teamData={teamData!} />
      )}
    </div>
  );
}
