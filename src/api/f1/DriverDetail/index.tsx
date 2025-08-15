import { F1_BASE_URL } from "../../../constants/f1Api";
import type { DriverDetailData } from "./entity";

async function fetchDriverDetail(driverId: number): Promise<DriverDetailData> {
  const url = `${F1_BASE_URL}drivers?id=${driverId}`;
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
    return data.response[0];
  } catch (error) {
    console.error(error);
    const message = error instanceof Error ? error.message : String(error);
    throw new Error(`오류 발생! ${message}`);
  }
}

export default fetchDriverDetail;
