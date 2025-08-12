import { useQuery } from "@tanstack/react-query";
import fetchTeamDetail from "../../../api/f1/TeamDetail";

function useGetTeamDetail(teamId: number) {
  return useQuery({
    queryKey: ["teamDetail", teamId],
    queryFn: () => fetchTeamDetail(teamId),
  });
}

export default useGetTeamDetail;
