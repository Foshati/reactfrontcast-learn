import { createContext, ReactNode, useReducer } from "react";

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


const initialState:TimerState ={
  isRunning:true,
  timers:[]
}

export const TimersContext = createContext<TimersContextValue | null>(null);

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {

  const [timersState, dispatch] =useReducer(timersReducer,initialState)



  const TimersContextValu: TimersContextValue = {
    isRunning: false,
    timers: [],
    addTimers() {},
    startTimers() {},
    stopTimers() {},
  };
  return (
    <TimersContext.Provider value={TimersContextValu}>
      {children}
    </TimersContext.Provider>
  );
}
