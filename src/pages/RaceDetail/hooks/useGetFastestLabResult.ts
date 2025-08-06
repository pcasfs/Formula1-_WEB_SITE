import { useQuery } from "@tanstack/react-query";
import fetchRankingFastestLab from "../../../api/f1/Ranking/RankingFastestLaps";

function useGetFastestLabResult(raceId: number) {
  return useQuery({
    queryKey: ["fastestLab", raceId],
    queryFn: () => fetchRankingFastestLab(raceId),
  });
}

export default useGetFastestLabResult;
