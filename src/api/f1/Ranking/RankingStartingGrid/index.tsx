import { F1_BASE_URL } from "../../../../constants/f1Api";
import type { StartingGridData } from "./entity";

async function fetchRankingStartingGrid(
  raceId: number
): Promise<StartingGridData[]> {
  const url = `${F1_BASE_URL}rankings/startinggrid?race=${raceId}`;
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
    console.log(data);
    if (data.error) {
      throw new Error(`API 오류 ${data.error}`);
    }
    return data.response;
  } catch (error) {
    console.error(error);
    throw new Error(`오류 발생! ${error.message}`);
  }
}

export default fetchRankingStartingGrid;
