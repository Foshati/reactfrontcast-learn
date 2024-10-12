import { createContext, ReactNode, useState } from "react";

type Timer = {
  name: string;
  duration: number;
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

type TimersContextProviderProps = {
  children: ReactNode;
};

export const TimersContext = createContext<TimersContextValue | null>(null);



export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [isRunning, setIsRunning] = useState(false);
  const [timers, setTimers] = useState<Timer[]>([]);

  const addTimers = (timerData: Timer) => {
    setTimers((prevTimers) => [...prevTimers, timerData]);
  };

  const startTimers = () => {
    setIsRunning(true);
  };

  const stopTimers = () => {
    setIsRunning(false);
  };

  const TimersContextValue: TimersContextValue = {
    isRunning,
    timers,
    addTimers,
    startTimers,
    stopTimers,
  };

  return (
    <TimersContext.Provider value={TimersContextValue}>
      {children}
    </TimersContext.Provider>
  );
}
