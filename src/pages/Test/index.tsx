import { useEffect } from "react";

const API_HOST = "v1.formula-1.api-sports.io";
const API_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

export default function RaceConsoleFetcher() {
  useEffect(() => {
    const fetchRaceResults = async () => {
      // 1. 전체 2025 시즌 경기 가져오기
      const raceRes = await fetch(`https://${API_HOST}/races?season=2025`, {
        headers: {
          "x-rapidapi-host": API_HOST,
          "x-rapidapi-key": API_KEY,
        },
      });
      const raceData = await raceRes.json();

      // 2. type: "Race" + status: "Completed" 필터
      const completedRaces = raceData.response.filter(
        (race) => race.type === "Race" && race.status === "Completed"
      );

      console.log("✅ 완료된 경기 목록:", completedRaces);

      // 3. 각 경기의 결과 가져오기
      for (const race of completedRaces) {
        const resultRes = await fetch(
          `https://${API_HOST}/rankings/drivers?race=${race.id}`,
          {
            headers: {
              "x-rapidapi-host": API_HOST,
              "x-rapidapi-key": API_KEY,
            },
          }
        );
        const resultData = await resultRes.json();
        console.log(`🏁 ${race.competition.name} 결과:`);
        console.log(resultData.response);
      }
    };

    fetchRaceResults();
  }, []);

  return <div>콘솔에서 결과를 확인하세요 🏁</div>;
}
