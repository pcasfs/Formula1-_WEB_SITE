import { useQuery } from "@tanstack/react-query";
import fetchDrivers from "../api/f1/Ranking/RankingDrivers/index";

function useGetRankingDrivers(season: number) {
  return useQuery({
    queryKey: ["rankingDrivers", season],
    queryFn: () => fetchDrivers(season),
  });
}

export default useGetRankingDrivers;
