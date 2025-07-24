export type RaceData = {
  id: number;
  competition: {
    id: number;
    name: string;
    location: {
      country: string;
      city: string;
    };
  };
  circuit: {
    id: number;
    name: string;
    image: string;
  };
  season: number;
  type: string;
  laps: {
    current: number | null;
    total: number | null;
  };
  fastest_lap: {
    driver: {
      id: number | null;
    };
    time: string | null;
  };
  distance: number | null;
  timezone: string;
  date: string;
  weather: string | null;
  status: string;
};
