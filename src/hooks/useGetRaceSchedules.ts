import { useQuery } from "@tanstack/react-query";
import fetchRaceSchedules from "../api/f1/Races/index";

function useGetRaceSchedules() {
  return useQuery({
    queryKey: ["schedules"],
    queryFn: fetchRaceSchedules,
  });
}

export default useGetRaceSchedules;
