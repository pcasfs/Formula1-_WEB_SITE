import { useEffect, useState } from "react";
import { useRaceScheduleStore } from "../../../store/useRaceScheduleStore";
import styles from "./Timer.module.css";

type Remaining = { d: number; h: number; m: number; s: number };

function calcRemaining(target: number): Remaining {
  const diff = target - Date.now();
  const day = 86400000;
  const hour = 3600000;
  const min = 60000;
  const d = Math.floor(diff / day);
  const h = Math.floor((diff % day) / hour);
  const m = Math.floor((diff % hour) / min);
  const s = Math.floor((diff % min) / 1000);
  return { d, h, m, s };
}

const pad2 = (n: number) => String(n).padStart(2, "0");

export default function Timer() {
  const nextSession = useRaceScheduleStore((state) => state.nextSession);
  const [remain, setRemain] = useState<Remaining | null>(null);

  useEffect(() => {
    if (!nextSession?.date) {
      setRemain(null);
      return;
    }
    const target = new Date(nextSession.date).getTime();

    const id = setInterval(() => setRemain(calcRemaining(target)), 1000);
    return () => clearInterval(id);
  }, [nextSession]);

  if (!remain) return null;

  return (
    <div className={styles["countdown"]}>
      <h2>
        {nextSession?.competition.name} ({nextSession?.type})까지 남은 시간
      </h2>
      <ul className={styles["countdown__list"]}>
        <li>
          <span className={styles["countdown__value"]}>{pad2(remain.d)}</span>
          <span className={styles["countdown__unit"]}>일</span>
        </li>
        <li>
          <span className={styles["countdown__value"]}>{pad2(remain.h)}</span>
          <span className={styles["countdown__unit"]}>시</span>
        </li>
        <li>
          <span className={styles["countdown__value"]}>{pad2(remain.m)}</span>
          <span className={styles["countdown__unit"]}>분</span>
        </li>
        <li>
          <span className={styles["countdown__value"]}>{pad2(remain.s)}</span>
          <span className={styles["countdown__unit"]}>초</span>
        </li>
      </ul>
    </div>
  );
}
