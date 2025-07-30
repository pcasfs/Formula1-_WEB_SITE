export type DriverData = {
  position: string;
  driver: {
    id: number;
    name: string;
    image: string;
  };
  team: {
    name: string;
    logo: string;
  };
  points: number;
};
