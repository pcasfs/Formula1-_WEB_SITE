export type DriverDetailData = {
  id: number;
  name: string;
  image: string;
  nationality: string;
  country: {
    name: string;
    code: string;
  };
  birthdate: string;
  birthplace: string;
  number: number;
  grands_prix_entered: number;
  world_championships: number;
  podiums: number;
  highest_race_finish: {
    position: number;
    number: number;
  };
  highest_grid_position: number;
  career_points: string;
  teams: DriverTeam[];
};

type DriverTeam = {
  season: number;
  team: {
    id: number;
    name: string;
    logo: string;
  };
};
