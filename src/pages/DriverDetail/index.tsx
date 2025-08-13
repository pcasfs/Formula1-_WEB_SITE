import { Link, useParams, useSearchParams } from "react-router-dom";
import useGetDriverDetail from "./hooks/useGetDriversDetail";
import styles from "./DriverDetail.module.css";
import DriverDetailSkeleton from "./skeletons/DriverDetailSkeleton";
import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";

export default function DriverDetail() {
  const { id } = useParams<{ id: string }>();
  const driverId = Number(id);
  const [searchParams] = useSearchParams();
  const selectedSeason = Number(searchParams.get("season"));

  const {
    data: driverData,
    isLoading: isDriverLoading,
    isError: isDriverError,
  } = useGetRankingDrivers(selectedSeason);
  const {
    data: driverDetailData,
    isLoading: isDriverDetailLoading,
    isError: isDriverDetailError,
  } = useGetDriverDetail(driverId);

  const rankingData = driverData?.find((item) => item.driver.id === driverId);

  const driverTeam = driverDetailData?.teams?.find(
    (team) => team.season === selectedSeason
  )?.team;

  if (isDriverError || isDriverDetailError) return <div>오류 발생!</div>;
  if (isDriverLoading || isDriverDetailLoading) return <DriverDetailSkeleton />;
  return (
    <div className={styles["driver-detail"]}>
      <section className={styles["driver-detail__profile"]}>
        <img
          className={styles["driver-detail__image"]}
          src={driverDetailData?.image ?? FALLBACK_IMAGES.driver}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGES.driver;
          }}
          alt={driverDetailData?.name}
        />
        <div>
          <h1>{driverDetailData?.name ?? "정보 없음"}</h1>
          <ul className={styles["driver-detail__info-list"]}>
            <li>
              <span className={styles["driver-detail__label"]}>팀: </span>
              <span className={styles["driver-detail__value"]}>
                {driverTeam?.id ? (
                  <Link to={`/teams/${driverTeam.id}?season=${selectedSeason}`}>
                    {driverTeam?.name ?? "정보 없음"}
                  </Link>
                ) : (
                  "정보 없음"
                )}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>국가: </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.country?.name ?? "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>차량번호: </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.number
                  ? `#${driverDetailData.number}`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>태어난 곳:</span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.birthplace ?? "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>생년월일: </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.birthdate ?? "정보 없음"}
              </span>
            </li>
          </ul>
        </div>
      </section>

      <div className={styles["driver-detail__sections"]}>
        <section className={styles["driver-detail__season"]}>
          <h2>{selectedSeason} 시즌</h2>
          <ul className={styles["driver-detail__info-list"]}>
            <li>
              <span className={styles["driver-detail__label"]}>
                시즌 포인트:
              </span>
              <span className={styles["driver-detail__value"]}>
                {rankingData?.points != null
                  ? `${rankingData.points}점`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>순위:</span>
              <span className={styles["driver-detail__value"]}>
                {rankingData?.position != null
                  ? `${rankingData.position}위`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>
                해당 시즌 우승 횟수:
              </span>
              <span className={styles["driver-detail__value"]}>
                {rankingData?.wins != null
                  ? `${rankingData.wins}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>
                1위와의 포인트 차이:
              </span>
              <span className={styles["driver-detail__value"]}>
                {rankingData?.behind != null
                  ? `${rankingData.behind}점`
                  : "0점"}
              </span>
            </li>
          </ul>
        </section>

        <section className={styles["driver-detail__career"]}>
          <h2>커리어 정보</h2>
          <ul className={styles["driver-detail__info-list"]}>
            <li>
              <span className={styles["driver-detail__label"]}>
                출전 그랑프리:
              </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.grands_prix_entered != null
                  ? `${driverDetailData.grands_prix_entered}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>
                월드 챔피언 타이틀:
              </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.world_championships != null
                  ? `${driverDetailData.world_championships}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>포디움:</span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.podiums != null
                  ? `${driverDetailData.podiums}회`
                  : "정보 없음"}
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>
                최고 결승 순위:
              </span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.highest_race_finish?.position != null
                  ? `${driverDetailData.highest_race_finish.position}위`
                  : "정보 없음"}{" "}
                (X{driverDetailData?.highest_race_finish?.number})
              </span>
            </li>
            <li>
              <span className={styles["driver-detail__label"]}>통산 점수:</span>
              <span className={styles["driver-detail__value"]}>
                {driverDetailData?.career_points != null
                  ? `${driverDetailData.career_points}포인트`
                  : "정보 없음"}
              </span>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}
