export type FastestLapData = {
  race: {
    id: number;
  };
  driver: {
    id: number;
    name: string;
    abbr: string;
    number: number;
    image: string;
  };
  team: {
    id: number;
    name: string;
    logo: string;
  };
  position: number;
  lap: number;
  time: string;
  avg_speed: string;
};
