## 🏎️ F1 웹 사이트

현재 시즌 F1 경기 일정, 팀 및 드라이버 랭킹, 상세 정보 등을 제공하는 웹 사이트입니다.

**React**와 **TypeScript**를 기반으로 제작하였습니다.

---

### 📌 주요 기능

- **🏁 경기 일정**: `API-Sports`의 Formula 1 API를 사용하여 경기 일정을 제공합니다.

  - 메인 페이지에서는 Previous,Now, Next, Upcoming 경기 일정을 간략히 보여줍니다.
  - `REST Countries API`를 통해 각 경기가 열리는 국가의 국기 이미지를 표시합니다.

- **📊 랭킹**:

  - **드라이버 랭킹**과 **팀 랭킹**을 탭으로 전환하여 볼 수 있습니다.
  - 시즌별 랭킹 조회가 가능합니다.

- **👨‍🚀 드라이버 상세 페이지**:

  - 드라이버의 기본 정보, 소속 팀, 시즌 기록, 커리어 정보를 제공합니다.

- **🏎️ 팀 상세 페이지**:

  - 팀의 기본 정보, 소속 드라이버, 차량 정보를 확인할 수 있습니다.

- **🏟️ 경기 일정 상세 페이지**:

  - 서킷의 기본정보와 해당 경기의 레이스, 패스티스트 랩, 스타팅 그리드 순위를 확인할 수 있습니다.

- **📱 반응형 UI**:
  - 미디어 쿼리를 사용하여 모바일과 데스크톱 환경에 모두 최적화된 화면을 제공합니다.
  - 데이터 로딩 중에는 **Skeleton UI**를 표시하여 사용자 경험을 개선했습니다.

---

### 🛠️ 기술 스택

- React + TypeScript
- React Query (데이터 캐싱), Zustand (전역 상태 일부)
- CSS Modules (BEM), REST Countries (국기), API-Sports (F1)

---

### 📂 폴더 구조

```plaintext
src/
 ┣ api/                        # API 호출 로직
 ┃ ┣ f1/                       # API-Sports
 ┃ ┃ ┣ Circuit/
 ┃ ┃ ┣ DriverDetail/
 ┃ ┃ ┣ Races/
 ┃ ┃ ┣ Ranking/
 ┃ ┃ ┃ ┣ RankingDrivers/
 ┃ ┃ ┃ ┣ RankingFastestLaps/
 ┃ ┃ ┃ ┣ RankingRaces/
 ┃ ┃ ┃ ┣ RankingStartingGrid/
 ┃ ┃ ┃ ┗ RankingTeams/
 ┃ ┃ ┗ TeamDetail/
 ┃ ┗ restCountry/              # REST Countries API

 ┣ asset/
 ┃ ┗ images/
 ┃   ┣ f1__background.jpg              # 정적 이미지 리소스
 ┃   ┣ f1__logo.jpg
 ┃   ┣ fallback__circuit.png
 ┃   ┗ fallback__driver.svg

 ┣ components/                 # 공용 컴포넌트
 ┃ ┣ FlagImage/
 ┃ ┣ Header/
 ┃ ┣ ScrollToTop/
 ┃ ┣ Skeletons/
 ┃ ┗ Table/

 ┣ constants/                  # 상수 (fallback 이미지, API URL 등)
 ┃ ┣ countryApi.ts
 ┃ ┣ currentYear.ts
 ┃ ┣ f1Api.ts
 ┃ ┣ fallbackImages.ts
 ┃ ┗ teamCarImages.json

 ┣ hooks/                      # 전역 훅
 ┃ ┣ useGetCountryFlag.ts
 ┃ ┣ useGetRaceSchedules.ts
 ┃ ┣ useGetRankingDrivers.ts
 ┃ ┗ useGetRankingTeams.ts

 ┣ pages/                      # 페이지 컴포넌트
 ┃ ┣ DriverDetail/
 ┃ ┣ Drivers/
 ┃ ┣ Home/
 ┃ ┣ RaceDetail/
 ┃ ┣ RaceSchedules/
 ┃ ┣ Ranking/
 ┃ ┣ TeamDetail/
 ┃ ┗ Teams/

 ┣ store/                      # Zustand 스토어
 ┃ ┗ useRaceScheduleStore.ts

 ┣ utils/                      # 유틸 함수
 ┃ ┗ getDateRange.ts

 ┣ App.tsx
 ┣ index.css
 ┣ main.tsx
 ┗ vite-env.d.ts

```
