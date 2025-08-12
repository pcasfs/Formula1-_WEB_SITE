import styles from "./TeamDetail.module.css";
import { Link, useParams, useSearchParams } from "react-router-dom";
import useGetTeamDetail from "./hooks/useGetTeamDetail";
import teamCarImages from "../../constants/teamCarImages.json";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";
import TeamDetailSkeleton from "./skeletons/TeamDetailSkeleton";
import { CURRENT_YEAR } from "../../constants/currentYear";
import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";

export default function TeamDetail() {
  const { id } = useParams<{ id: string }>();
  const teamId = Number(id);
  const [searchParams] = useSearchParams();
  const selectedSeason = Number(searchParams.get("season"));

  const {
    data: teamDetailData,
    isLoading: isTeamDetailLoading,
    isError: isTeamDetailError,
  } = useGetTeamDetail(teamId);
  const {
    data: driverData,
    isLoading: isDriverLoading,
    isError: isDriverError,
  } = useGetRankingDrivers(selectedSeason);

  const teamDrivers = driverData?.filter((driver) => driver.team.id === teamId);

  const carImage = teamCarImages.find(
    (teamCar) => teamCar.teamId === teamId
  )?.carImage;

  if (isTeamDetailError || isDriverError) return <div>오류 발생!</div>;
  if (isTeamDetailLoading || isDriverLoading) {
    return <TeamDetailSkeleton />;
  }

  return (
    <div className={styles["team-detail"]}>
      <section className={styles["team-detail__card"]}>
        <div className={styles["team-detail__card-left"]}>
          <header className={styles["team-detail__card-header"]}>
            <img
              className={styles["team-detail__logo"]}
              src={teamDetailData?.logo}
              alt={teamDetailData?.name}
            />
            <h1>{teamDetailData?.name ?? "정보 없음"}</h1>
          </header>
          <ul className={styles["team-detail__info-list"]}>
            <li>
              <span className={styles["team-detail__label"]}>
                월드 챔피언 횟수:
              </span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.world_championships != null
                  ? `${teamDetailData.world_championships}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>최고 순위:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.highest_race_finish?.position != null
                  ? `${teamDetailData.highest_race_finish.position}위`
                  : "정보 없음"}{" "}
                (X{teamDetailData?.highest_race_finish?.number})
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>폴 포지션:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.world_championships != null
                  ? `${teamDetailData.world_championships}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>
                패스티스트 랩:
              </span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.fastest_laps != null
                  ? `${teamDetailData.fastest_laps}회`
                  : "정보 없음"}
              </span>
            </li>
          </ul>
        </div>

        <div className={styles["team-detail__card-right"]}>
          {teamDrivers?.slice(0, 2).map((driver) => (
            <Link
              className={styles["driver-profile"]}
              key={driver.driver.id}
              to={`/drivers/${driver.driver.id}?season=${CURRENT_YEAR}`}
            >
              <img src={driver.driver.image} alt={driver.driver.name} />
              <p>{driver.driver.name}</p>
            </Link>
          ))}
        </div>
      </section>

      <div className={styles["team-detail__sections"]}>
        <section>
          <h2>팀 차량 정보</h2>
          <img
            className={styles["team-detail__car-image"]}
            src={carImage ?? FALLBACK_IMAGES.car}
            alt={teamDetailData?.name ?? "정보 없음"}
          />
          <ul className={styles["team-detail__car-info-list"]}>
            <li>
              <span>섀시 모델:</span>
              <span>{teamDetailData?.chassis ?? "정보 없음"}</span>
            </li>
            <li>
              <span>엔진:</span>
              <span>{teamDetailData?.engine ?? "정보 없음"}</span>
            </li>
            <li>
              <span>타이어:</span>
              <span>{teamDetailData?.tyres ?? "정보 없음"}</span>
            </li>
          </ul>
        </section>

        <section>
          <h2>팀 상세정보</h2>
          <ul className={styles["team-detail__info-list"]}>
            <li>
              <span className={styles["team-detail__label"]}>본사 위치:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.base ?? "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>
                F1 첫 출전 연도:
              </span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.first_team_entry != null
                  ? `${teamDetailData.first_team_entry}년`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>팀 대표:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.president ?? "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>팀 디렉터:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.director ?? "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["team-detail__label"]}>기술 책임자:</span>
              <span className={styles["team-detail__value"]}>
                {teamDetailData?.technical_manager ?? "정보 없음"}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
