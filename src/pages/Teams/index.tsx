import useGetRankingTeams from "../../hooks/useGetRankingTeams";
import teamCarImages from "../../constants/teamCarImages.json";
import { FALLBACK_IMAGES } from "../../constants/fallbackImages";
import styles from "./Teams.module.css";
import { useNavigate } from "react-router-dom";
import useGetRankingDrivers from "../../hooks/useGetRankingDrivers";
import Skeletons from "../../components/Skeletons/Skeletons";
import { CURRENT_YEAR } from "../../constants/currentYear";

export default function Teams() {
  const navigate = useNavigate();

  const {
    data: teamData,
    isLoading: isTeamLoading,
    isError: isTeamError,
  } = useGetRankingTeams(CURRENT_YEAR);
  const {
    data: driverData,
    isLoading: isDriverLoading,
    isError: isDriverError,
  } = useGetRankingDrivers(CURRENT_YEAR);

  if (isTeamError || isDriverError) return <div>오류 발생!</div>;
  if (isTeamLoading || isDriverLoading) {
    return (
      <div className={styles["team-list"]}>
        {Array.from({ length: 8 }).map((_, idx) => (
          <div
            key={idx}
            className={`${styles["team-card"]} ${styles["team-card--skeleton"]}`}
          >
            <Skeletons width="100%" height="100%" borderRadius={12} />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className={styles["team-list"]}>
      {teamData?.map((team) => {
        const carImage = teamCarImages.find(
          (teamCar) => teamCar.teamId === team.team.id
        )?.carImage;
        return (
          <div
            onClick={() =>
              navigate(`/teams/${team.team.id}?season=${CURRENT_YEAR}`)
            }
            className={styles["team-card"]}
            key={team.team.id}
          >
            <h2>{team.team.name}</h2>
            <div className={styles["team-card__drivers"]}>
              {driverData
                ?.filter((driver) => driver.team.id === team.team.id)
                .slice(0, 2)
                .map((driver) => (
                  <div
                    className={styles["driver-profile"]}
                    key={driver.driver.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/drivers/${driver.driver.id}`);
                    }}
                  >
                    <img src={driver.driver.image} alt={driver.driver.name} />
                    <span>{driver.driver.name}</span>
                  </div>
                ))}
            </div>
            <img
              className={styles["team-card__car-image"]}
              src={carImage ?? FALLBACK_IMAGES.car}
              alt={team.team.name}
            />
          </div>
        );
      })}
    </div>
  );
}
