import { create } from "zustand";
import type { DriverData } from "../api/f1/Drivers/entity";

type DriverState = {
  drivers: DriverData[];
  setDrivers: (data: DriverData[]) => void;
};

export const useDriverStore = create<DriverState>((set) => ({
  drivers: [],
  setDrivers: (data) => set({ drivers: data }),
}));
