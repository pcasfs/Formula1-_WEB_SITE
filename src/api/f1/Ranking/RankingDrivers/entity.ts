export type DriverData = {
  position: string;
  driver: {
    id: number;
    name: string;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  points: number;
  wins: number;
  behind: number;
};
