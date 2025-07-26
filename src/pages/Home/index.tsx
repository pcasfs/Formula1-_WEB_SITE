import { Suspense, useEffect } from "react";
import useGetRaceSchedules from "./hooks/useGetRaceSchedules";
import { useRaceScheduleStore } from "../../store/useRaceScheduleStore";
import CountryFlagDisplay from "../../components/FlagImage/FlagImage";
import styles from "./Home.module.css";
import HomeSkeleton from "./skeletons/HomeSkeleton";

export default function Home() {
  const { data: raceScheduleData } = useGetRaceSchedules();
  const { nowRace, nextRace, upcomingRace, previousRace, setRaceStatus } =
    useRaceScheduleStore();

  useEffect(() => {
    if (raceScheduleData) {
      setRaceStatus(raceScheduleData);
    }
  }, [raceScheduleData, setRaceStatus]);

  let highlightTarget;

  if (nowRace) {
    highlightTarget = "now";
  } else if (!nowRace && nextRace) {
    highlightTarget = "next";
  } else {
    highlightTarget = null;
  }

  return (
    <Suspense fallback={<HomeSkeleton />}>
      <div className={styles["schedule-summary"]}>
        <div className={styles["schedule-summary__section"]}>
          <h1 className={styles["schedule-summary__title"]}>Previous</h1>
          <div className={styles["schedule-summary__card"]}>
            <p className={styles["schedule-summary__gp-name"]}>
              {previousRace?.gpName}
            </p>
            <CountryFlagDisplay countryName={previousRace?.countryName} />
            <p className={styles["schedule-summary__date-range"]}>
              {previousRace?.dateRange}
            </p>
          </div>
        </div>

        {nowRace && (
          <div
            className={`${styles["schedule-summary__section"]} ${
              highlightTarget === "now"
                ? styles["schedule-summary__section--highlight"]
                : ""
            }`}
          >
            <h1 className={styles["schedule-summary__title"]}>Now</h1>
            <div
              className={`${styles["schedule-summary__card"]} ${
                highlightTarget === "now"
                  ? styles["schedule-summary__card--highlight"]
                  : ""
              }`}
            >
              <p className={styles["schedule-summary__gp-name"]}>
                {nowRace.gpName}
              </p>
              <CountryFlagDisplay countryName={nowRace?.countryName} />
              <p className={styles["schedule-summary__date-range"]}>
                {nowRace.dateRange}
              </p>
            </div>
          </div>
        )}

        <div
          className={`${styles["schedule-summary__section"]} ${
            highlightTarget === "next"
              ? styles["schedule-summary__section--highlight"]
              : ""
          }`}
        >
          <h1 className={styles["schedule-summary__title"]}>Next</h1>
          <div
            className={`${styles["schedule-summary__card"]} ${
              highlightTarget === "next"
                ? styles["schedule-summary__card--highlight"]
                : ""
            }`}
          >
            <p className={styles["schedule-summary__gp-name"]}>
              {nextRace?.gpName}
            </p>
            <CountryFlagDisplay countryName={nextRace?.countryName} />
            <p className={styles["schedule-summary__date-range"]}>
              {nextRace?.dateRange}
            </p>
          </div>
        </div>

        <div className={styles["schedule-summary__section"]}>
          <h1 className={styles["schedule-summary__title"]}>Upcoming</h1>
          <div className={styles["schedule-summary__card"]}>
            <p className={styles["schedule-summary__gp-name"]}>
              {upcomingRace?.gpName}
            </p>
            <CountryFlagDisplay countryName={upcomingRace?.countryName} />
            <p className={styles["schedule-summary__date-range"]}>
              {upcomingRace?.dateRange}
            </p>
          </div>
        </div>
      </div>
    </Suspense>
  );
}
