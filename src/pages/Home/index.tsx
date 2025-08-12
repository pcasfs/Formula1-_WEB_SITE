import { useEffect } from "react";
import useGetRaceSchedules from "../../hooks/useGetRaceSchedules";
import { useRaceScheduleStore } from "../../store/useRaceScheduleStore";
import styles from "./Home.module.css";
import HomeSkeleton from "./skeletons/HomeSkeleton";
import FlagImage from "../../components/FlagImage/FlagImage";
import { Link } from "react-router-dom";

export default function Home() {
  const { data: raceScheduleData, isLoading, isError } = useGetRaceSchedules();
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

  if (isError) {
    return <div>오류발생!</div>;
  }
  if (isLoading) return <HomeSkeleton />;

  return (
    <div className={styles["schedule-summary"]}>
      <div className={styles["schedule-summary__section"]}>
        <h1 className={styles["schedule-summary__title"]}>Previous</h1>
        <div className={styles["schedule-summary__card"]}>
          <Link
            to={`/race/${previousRace?.raceId}?circuitId=${previousRace?.circuitId}&status=${previousRace?.status}`}
          >
            <p className={styles["schedule-summary__gp-name"]}>
              {previousRace?.gpName}
            </p>
            <FlagImage
              className={styles["schedule-summary__FlagImage"]}
              countryName={previousRace?.countryName}
            />
            <p className={styles["schedule-summary__date-range"]}>
              {previousRace?.dateRange}
            </p>
          </Link>
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
            <Link
              to={`/race/${nowRace?.raceId}?circuitId=${nowRace?.circuitId}&status=${nowRace?.status}`}
            >
              <p className={styles["schedule-summary__gp-name"]}>
                {nowRace.gpName}
              </p>
              <FlagImage
                className={styles["schedule-summary__FlagImage"]}
                countryName={nowRace?.countryName}
              />
              <p className={styles["schedule-summary__date-range"]}>
                {nowRace.dateRange}
              </p>
            </Link>
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
          <Link
            to={`/race/${nextRace?.raceId}?circuitId=${nextRace?.circuitId}&status=${nextRace?.status}`}
          >
            <p className={styles["schedule-summary__gp-name"]}>
              {nextRace?.gpName}
            </p>
            <FlagImage
              className={styles["schedule-summary__FlagImage"]}
              countryName={nextRace?.countryName}
            />
            <p className={styles["schedule-summary__date-range"]}>
              {nextRace?.dateRange}
            </p>
          </Link>
        </div>
      </div>

      <div className={styles["schedule-summary__section"]}>
        <h1 className={styles["schedule-summary__title"]}>Upcoming</h1>
        <div className={styles["schedule-summary__card"]}>
          <Link
            to={`/race/${upcomingRace?.raceId}?circuitId=${upcomingRace?.circuitId}&status=${upcomingRace?.status}`}
          >
            <p className={styles["schedule-summary__gp-name"]}>
              {upcomingRace?.gpName}
            </p>
            <FlagImage
              className={styles["schedule-summary__FlagImage"]}
              countryName={upcomingRace?.countryName}
            />
            <p className={styles["schedule-summary__date-range"]}>
              {upcomingRace?.dateRange}
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}
