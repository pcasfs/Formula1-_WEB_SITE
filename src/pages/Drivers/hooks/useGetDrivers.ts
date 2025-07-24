import { useSuspenseQuery } from "@tanstack/react-query";
import fetchDrivers from "../../../api/f1/Drivers";

function useGetDrivers() {
  return useSuspenseQuery({
    queryKey: ["drivers"],
    queryFn: fetchDrivers,
  });
}

export default useGetDrivers;
