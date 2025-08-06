import { useQuery } from "@tanstack/react-query";
import fetchRankingTeams from "../api/f1/Ranking/RankingTeams";

function useGetRankingTeams(season: number) {
  return useQuery({
    queryKey: ["rankingTeams", season],
    queryFn: () => fetchRankingTeams(season),
  });
}

export default useGetRankingTeams;
