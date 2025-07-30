import { useQuery } from "@tanstack/react-query";
import fetchCountryFlag from "../../../api/restCountry/index";

function useGetCountryFlag(countryName: string) {
  return useQuery({
    queryKey: ["countryFlag", countryName],
    queryFn: () => fetchCountryFlag(countryName),
    enabled: !!countryName,
  });
}

export default useGetCountryFlag;
