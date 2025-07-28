import { useSuspenseQuery } from "@tanstack/react-query";
import fetchCountryFlag from "../api/restCountry/index";

function useGetCountryFlag(countryName: string) {
  return useSuspenseQuery({
    queryKey: ["countryFlag", countryName],
    queryFn: () => fetchCountryFlag(countryName),
  });
}

export default useGetCountryFlag;
