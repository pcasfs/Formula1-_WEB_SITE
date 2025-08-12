export type TeamDetailData = {
  id: number;
  name: string;
  logo: string;
  base: string;
  first_team_entry: number;
  world_championships: number;
  highest_race_finish: {
    position: number;
    number: number;
  };
  pole_positions: number;
  fastest_laps: number;
  president: string;
  director: string;
  technical_manager: string;
  chassis: string;
  engine: string;
  tyres: string;
};
