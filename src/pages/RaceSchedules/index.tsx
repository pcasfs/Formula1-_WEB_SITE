import { Link, useNavigate } from "react-router-dom";
import FlagImage from "../../components/FlagImage/FlagImage";
import useGetRaceSchedules from "../../hooks/useGetRaceSchedules";
import styles from "./RaceSchedules.module.css";
import { useRaceScheduleStore } from "../../store/useRaceScheduleStore";
import { useEffect, useRef } from "react";
import RaceSchedulesSkeleton from "./skeletons/RaceSchedulesSkeleton";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";

export default function RaceSchedules() {
  const navigate = useNavigate();

  const nextRaceCardRef = useRef<HTMLDivElement | null>(null);

  const { nowRace, nextRace, setRaceStatus } = useRaceScheduleStore();
  const { data: raceScheduleData, isLoading, isError } = useGetRaceSchedules();

  useEffect(() => {
    if (!nowRace && !nextRace && raceScheduleData) {
      setRaceStatus(raceScheduleData);
    }
  }, [raceScheduleData, nowRace, nextRace, setRaceStatus]);

  if (isError) return <div>오류 발생!</div>;
  if (isLoading || !raceScheduleData) return <RaceSchedulesSkeleton />;

  const groupedRaces = raceScheduleData.reduce((acc, cur) => {
    const key = cur.circuit.name;
    if (!acc[key]) acc[key] = [];
    acc[key].push(cur);
    return acc;
  }, {} as Record<string, typeof raceScheduleData>);

  let round = 1;
  let showResultButton = true;

  return (
    <div className={styles["race-schedules-page"]}>
      <button
        className={styles["race-schedules__next-button"]}
        onClick={() =>
          nextRaceCardRef.current?.scrollIntoView({ behavior: "smooth" })
        }
      >
        다음 경기로 이동
      </button>

      <div className={styles["race-schedules"]}>
        {Object.entries(groupedRaces).map(([circuitName, sessions]) => {
          const RaceSession = sessions?.find(
            (session) => session.type === "Race"
          );
          const isNowRace = RaceSession?.competition.name === nowRace?.gpName;
          const isNextRace = RaceSession?.competition.name === nextRace?.gpName;

          if (isNextRace) showResultButton = false;

          return (
            <div
              key={circuitName}
              ref={isNextRace ? nextRaceCardRef : null}
              className={styles["race-schedules__card"]}
            >
              <div className={styles["race-schedules__card-round"]}>
                <h1>Round {round++}</h1>
                {isNowRace && (
                  <div className={styles["race-schedules__badge--now"]}>
                    <span>Now</span>
                  </div>
                )}
                {isNextRace && (
                  <div className={styles["race-schedules__badge--next"]}>
                    <span>Next</span>
                  </div>
                )}
              </div>
              <h2>
                <FlagImage
                  className={styles["race-schedules__flag"]}
                  countryName={RaceSession?.competition.location.country}
                />
                {RaceSession?.competition.name}
              </h2>
              <p>서킷: {RaceSession?.circuit.name}</p>
              <Link
                to={`/race/${RaceSession?.id}?circuitId=${RaceSession?.circuit?.id}&status=${RaceSession?.status}`}
                className={styles["race-schedules__circuit-button"]}
              >
                <img
                  className={styles["race-schedules__circuit-image"]}
                  src={RaceSession?.circuit.image ?? FALLBACK_IMAGES.circuit}
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_IMAGES.circuit;
                  }}
                  alt={RaceSession?.circuit.name}
                />
              </Link>
              <ul className={styles["race-schedules__sessions-info"]}>
                {sessions.map((session) => (
                  <li key={session.id}>
                    <span>{session.type}</span>
                    <span>
                      {new Date(session.date).toLocaleString("ko-KR", {
                        timeZone: "Asia/Seoul",
                        month: "short",
                        day: "2-digit",
                        hour: "2-digit",
                        minute: "2-digit",
                        weekday: "short",
                      })}
                    </span>
                  </li>
                ))}
              </ul>

              {showResultButton && (
                <button
                  className={styles["race-schedules__result-button"]}
                  onClick={() =>
                    navigate(
                      `/race/${RaceSession?.id}?circuitId=${RaceSession?.circuit?.id}&status=${RaceSession?.status}`
                    )
                  }
                >
                  결과
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
