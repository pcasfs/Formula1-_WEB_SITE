import { useQuery } from "@tanstack/react-query";
import fetchDriverDetail from "../../../api/f1/DriverDetail";

function useGetDriverDetail(driverId: number) {
  return useQuery({
    queryKey: ["driverDetail", driverId],
    queryFn: () => fetchDriverDetail(driverId),
  });
}

export default useGetDriverDetail;
