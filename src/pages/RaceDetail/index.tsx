import { useParams, useSearchParams } from "react-router-dom";
import useGetCircuit from "./hooks/useGetCircuit";
import FlagImage from "../../components/FlagImage/FlagImage";
import RaceTable from "./components/RaceTable";
import StartingGridTable from "./components/StartingGridTable";
import FastestLabTable from "./components/FastestLabTable";
import { useState } from "react";
import styles from "./RaceDetail.module.css";
import RaceDetailSkeleton from "./skeletons/RaceDetailSkeleton";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";

export default function RaceDetail() {
  const [tab, setTab] = useState<"race" | "fastestLab" | "startingGrid">(
    "race"
  );

  const { id } = useParams<{ id: string }>();
  const raceId = Number(id);
  const [searchParams] = useSearchParams();
  const circuitId = Number(searchParams.get("circuitId"));
  const status = searchParams.get("status");

  const { data: circuitData, isLoading, isError } = useGetCircuit(circuitId);

  if (isError) return <div>오류 발생!</div>;
  if (isLoading) return <RaceDetailSkeleton />;

  return (
    <div className={styles["race-detail"]}>
      <div className={styles["race-detail__title"]}>
        <FlagImage
          className={styles["race-detail__flag"]}
          countryName={circuitData?.competition.location.country}
        />
        <h1>{circuitData?.name ?? "정보 없음"}</h1>
      </div>

      <section className={styles["race-detail__circuit-section"]}>
        <img
          className={styles["race-detail__circuit-image"]}
          src={circuitData?.image ?? FALLBACK_IMAGES.circuit}
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGES.circuit;
          }}
          alt={circuitData?.name ?? "정보 없음"}
        />
        <ul>
          <li>
            <span>한 바퀴 거리:</span>
            <span>{circuitData?.length ?? "정보 없음"}</span>
          </li>
          <li>
            <span>총 거리:</span>
            <span>{circuitData?.race_distance ?? "정보 없음"}</span>
          </li>
          <li>
            <span>랩 수:</span>
            <span>
              {circuitData?.laps != null ? circuitData.laps : "정보 없음"}
            </span>
          </li>
          <li>
            <span>최고 랩타임:</span>
            <span>
              {circuitData?.lap_record?.time ?? "정보 없음"}
              <p>({circuitData?.lap_record?.driver ?? "정보 없음"})</p>
            </span>
          </li>
          <li>
            <span>관중 수용 인원:</span>
            <span>
              {circuitData?.capacity != null
                ? `${circuitData.capacity.toLocaleString()}명`
                : "정보 없음"}
            </span>
          </li>
          <li>
            <span>최초 개최:</span>
            <span>
              {circuitData?.first_grand_prix != null
                ? `${circuitData.first_grand_prix}년`
                : "정보 없음"}
            </span>
          </li>
          <li>
            <span>서킷 개장 연도:</span>
            <span>
              {circuitData?.opened != null
                ? `${circuitData.opened}년`
                : "정보 없음"}
            </span>
          </li>
          <li>
            <span>소유주:</span>
            <span>{circuitData?.owner ?? "정보 없음"}</span>
          </li>
        </ul>
      </section>

      {status === "Scheduled" ? (
        <p>경기 시작 전이거나 정보가 없습니다.</p>
      ) : (
        <section className={styles["race-detail__result-section"]}>
          <div className={styles["race-detail__tab"]}>
            <button
              className={`${styles["race-detail__button"]} ${
                tab === "race" ? styles["race-detail__button--active"] : ""
              }`}
              onClick={() => setTab("race")}
            >
              레이스
            </button>
            <button
              className={`${styles["race-detail__button"]} ${
                tab === "startingGrid"
                  ? styles["race-detail__button--active"]
                  : ""
              }`}
              onClick={() => setTab("startingGrid")}
            >
              스타팅 그리드
            </button>
            <button
              className={`${styles["race-detail__button"]} ${
                tab === "fastestLab"
                  ? styles["race-detail__button--active"]
                  : ""
              }`}
              onClick={() => setTab("fastestLab")}
            >
              패스티스트 랩
            </button>
          </div>

          <div className={styles["race-detail__table"]}>
            {tab === "race" && <RaceTable raceId={raceId} />}
            {tab === "startingGrid" && <StartingGridTable raceId={raceId} />}
            {tab === "fastestLab" && <FastestLabTable raceId={raceId} />}
          </div>
        </section>
      )}
    </div>
  );
}
