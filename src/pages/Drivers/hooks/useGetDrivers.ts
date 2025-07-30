import { useQuery } from "@tanstack/react-query";
import fetchDrivers from "../../../api/f1/Drivers";

function useGetDrivers() {
  return useQuery({
    queryKey: ["drivers"],
    queryFn: fetchDrivers,
  });
}

export default useGetDrivers;
