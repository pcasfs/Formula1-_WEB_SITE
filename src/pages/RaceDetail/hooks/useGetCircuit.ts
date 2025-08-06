import { useQuery } from "@tanstack/react-query";
import fetchCircuit from "../../../api/f1/Circuit";

function useGetCircuit(circuitId: number) {
  return useQuery({
    queryKey: ["circuit", circuitId],
    queryFn: () => fetchCircuit(circuitId),
  });
}

export default useGetCircuit;
