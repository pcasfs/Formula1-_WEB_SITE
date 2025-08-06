import { useQuery } from "@tanstack/react-query";
import fetchRankingRace from "../../../api/f1/Ranking/RankingRaces";

function useGetRaceResult(raceId: number) {
  return useQuery({
    queryKey: ["raceResult", raceId],
    queryFn: () => fetchRankingRace(raceId),
  });
}

export default useGetRaceResult;
