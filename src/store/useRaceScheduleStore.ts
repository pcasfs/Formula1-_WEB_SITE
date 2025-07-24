import { create } from "zustand";
import type { RaceData } from "../api/f1/Races/entity";
import { getDateRange } from "../utils/getDateRange";

type RaceSummary = {
  name: string;
  dateRange: string;
};

type RaceScheduleState = {
  nowRace: RaceSummary | null;
  nextRace: RaceSummary | null;
  upcomingRace: RaceSummary | null;
  previousRace: RaceSummary | null;
  setRaceStatus: (sessions: RaceData[]) => void;
};

export const useRaceScheduleStore = create<RaceScheduleState>((set) => ({
  nowRace: null,
  nextRace: null,
  upcomingRace: null,
  previousRace: null,

  setRaceStatus: (sessions) => {
    const now = new Date();

    const nextSession = sessions.find((s) => new Date(s.date) > now);
    if (!nextSession) return;
    const gpName = nextSession.competition.name;

    const gpSessions = sessions.filter((s) => s.competition.name === gpName);
    const sessionDates = gpSessions.map((s) => new Date(s.date).getTime());
    const start = new Date(Math.min(...sessionDates));
    const end = new Date(Math.max(...sessionDates));

    const isNow = now >= start && now <= end;
    const gpDateRange = getDateRange(start, end);

    const currentRace: RaceSummary = {
      name: gpName,
      dateRange: gpDateRange,
    };

    //Next Race
    let nextRace: RaceSummary;
    if (isNow) {
      const nextSessionIndex = sessions.findIndex((s) => s === nextSession);
      const nextNextSession = sessions
        .slice(nextSessionIndex + 1)
        .find((s) => s.competition.name !== gpName);

      if (!nextNextSession) {
        nextRace = currentRace;
      } else {
        const nextNextGpName = nextNextSession.competition.name;
        const nextNextSessions = sessions.filter(
          (s) => s.competition.name === nextNextGpName
        );
        const dates = nextNextSessions.map((s) => new Date(s.date).getTime());
        const start = new Date(Math.min(...dates));
        const end = new Date(Math.max(...dates));

        nextRace = {
          name: nextNextGpName,
          dateRange: getDateRange(start, end),
        };
      }
    } else {
      nextRace = currentRace;
    }

    //Upcoming Race
    let upcomingRace: RaceSummary | null = null;
    const baseGpName = isNow ? nextRace.name : gpName;
    const baseGpIndex = sessions.findIndex(
      (s) => s.competition.name === baseGpName
    );
    const upcomingSession = sessions
      .slice(baseGpIndex + 1)
      .find((s) => s.competition.name !== baseGpName);

    if (upcomingSession) {
      const upcomingGpName = upcomingSession.competition.name;
      const upcomingSessions = sessions.filter(
        (s) => s.competition.name === upcomingGpName
      );
      const upcomingDates = upcomingSessions.map((s) =>
        new Date(s.date).getTime()
      );
      const start = new Date(Math.min(...upcomingDates));
      const end = new Date(Math.max(...upcomingDates));

      upcomingRace = {
        name: upcomingGpName,
        dateRange: getDateRange(start, end),
      };
    }

    //Previous Race
    let previousRace: RaceSummary | null = null;
    const previousSession = [...sessions]
      .reverse()
      .find((s) => new Date(s.date) < now);

    if (previousSession) {
      const previousGpName = previousSession.competition.name;
      const previousSessions = sessions.filter(
        (s) => s.competition.name === previousGpName
      );
      const previousDates = previousSessions.map((s) =>
        new Date(s.date).getTime()
      );
      const prevStart = new Date(Math.min(...previousDates));
      const prevEnd = new Date(Math.max(...previousDates));

      previousRace = {
        name: previousGpName,
        dateRange: getDateRange(prevStart, prevEnd),
      };
    }

    set({
      nowRace: isNow ? currentRace : null,
      nextRace,
      upcomingRace,
      previousRace,
    });
  },
}));
