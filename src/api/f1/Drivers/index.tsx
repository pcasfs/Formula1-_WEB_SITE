import { BASE_URL } from "../../../constants/api";
import type { DriverData } from "./entity";

async function fetchDrivers(): Promise<DriverData> {
  const url = `${BASE_URL}rankings/drivers?season=2025`;
  const res = await fetch(url, {
    headers: {
      "x-rapidapi-host": "v1.formula-1.api-sports.io",
      "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
    },
  });
  const data = await res.json();
  console.log(data.response);
  return data.response;
}

export default fetchDrivers;
