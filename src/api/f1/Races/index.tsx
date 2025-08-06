import { F1_BASE_URL } from "../../../constants/f1Api";
import type { RaceData } from "./entity";

async function fetchRaceSchedules(): Promise<RaceData[]> {
  const url = `${F1_BASE_URL}races?season=2025`;
  try {
    const res = await fetch(url, {
      headers: {
        "x-rapidapi-host": "v1.formula-1.api-sports.io",
        "x-rapidapi-key": import.meta.env.VITE_RAPIDAPI_KEY,
      },
    });
    if (!res.ok) {
      throw new Error(`HTTP 오류 ${res.status}`);
    }
    const data = await res.json();
    if (data.error) {
      throw new Error(`API 오류 ${data.error}`);
    }
    return data.response;
  } catch (error) {
    console.error(error);
    throw new Error(`오류 발생! ${error.message}`);
  }
}

export default fetchRaceSchedules;
