import { useEffect } from "react";
import useGetRaceSchedules from "./hooks/useGetRaceSchedules";
import { useRaceScheduleStore } from "../../store/useRaceScheduleStore";

export default function Home() {
  const { data: raceScheduleData } = useGetRaceSchedules();
  const { nowRace, nextRace, upcomingRace, previousRace, setRaceStatus } =
    useRaceScheduleStore();

  useEffect(() => {
    if (raceScheduleData) {
      setRaceStatus(raceScheduleData);
    }
  }, [raceScheduleData, setRaceStatus]);

  return (
    <div>
      <div>
        <h2>Previous</h2>
        <p>{previousRace?.name}</p>
        <p>{previousRace?.dateRange}</p>
      </div>
      {nowRace && (
        <div>
          <h2>Now</h2>
          <p>{nowRace.name}</p>
          <p>{nowRace.dateRange}</p>
        </div>
      )}
      <div>
        <h2>Next</h2>
        <p>{nextRace?.name}</p>
        <p>{nextRace?.dateRange}</p>
      </div>
      <div>
        <h2>Upcoming</h2>
        <p>{upcomingRace?.name}</p>
        <p>{upcomingRace?.dateRange}</p>
      </div>
    </div>
  );
}
