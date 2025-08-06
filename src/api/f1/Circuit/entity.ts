export type CircuitData = {
  id: number;
  name: string;
  image: string;
  competition: {
    id: number;
    name: string;
    location: {
      country: string;
      city: string;
    };
  };
  first_grand_prix: number;
  laps: number;
  length: string;
  race_distance: string;
  lap_record: {
    time: string;
    driver: string;
    year: string;
  };
  capacity: number;
  opened: number;
  owner: string | null;
};
