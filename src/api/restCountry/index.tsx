import { COUNTRY_BASE_URL } from "../../constants/countryApi";
import type { CountryData } from "./entity";

async function fetchCountryFlag(countryName: string): Promise<CountryData> {
  const url = `${COUNTRY_BASE_URL}name/${countryName}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`HTTP 오류 ${res.status}`);
    }
    const data = await res.json();
    if (data.error) {
      throw new Error(`API 오류 ${data.error}`);
    }
    const normalizedCountryName =
      countryName === "USA" ? "United States" : countryName;

    const country = data.find(
      (country: CountryData) =>
        country.name.common.toLowerCase() ===
        normalizedCountryName.toLowerCase()
    );

    return country?.flags?.png ?? null;
  } catch (error) {
    console.error(error);
    throw new Error(`오류 발생! ${error.message}`);
  }
}

export default fetchCountryFlag;
