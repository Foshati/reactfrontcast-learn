import { createContext } from "react";

type Timer = {
  name: string;
  duration: Number;
};

type TimerState = {
  isRunning: boolean;
  timers: Timer[];
};

type TimersContextValue = TimerState & {
  addTimers: (TimerData: Timer) => void;
  startTimers: () => void;
  stopTimers: () => void;
};

const TimersContext = createContext<TimersContextValue>(null);
