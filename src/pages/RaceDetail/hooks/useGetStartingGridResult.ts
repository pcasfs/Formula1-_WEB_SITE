import { useQuery } from "@tanstack/react-query";
import fetchRankingStartingGrid from "../../../api/f1/Ranking/RankingStartingGrid";

function useGetStartingGridResult(raceId: number) {
  return useQuery({
    queryKey: ["startingGrid", raceId],
    queryFn: () => fetchRankingStartingGrid(raceId),
  });
}

export default useGetStartingGridResult;
