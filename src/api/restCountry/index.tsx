import { COUNTRY_BASE_URL } from "../../constants/countryApi";
import type { CountryData } from "./entity";

async function fetchCountryFlag(countryName: string): Promise<CountryData> {
  const url = `${COUNTRY_BASE_URL}name/${countryName}`;
  const res = await fetch(url);
  const data = await res.json();
  const country = data.find(
    (country: CountryData) =>
      country.name.common.toLowerCase() === countryName.toLowerCase()
  );

  return country?.flags?.png ?? null;
}

export default fetchCountryFlag;
