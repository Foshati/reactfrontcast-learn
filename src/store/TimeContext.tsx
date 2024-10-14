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

type StartTimerType = {
  type: "START_TIMER";
};

type StopTimerType = {
  type: "STOP_TIMER";
};

type AddTimerType = {
  type: "ADD_TIMER";
  payload: Timer;
};


type Action = AddTimerType | StartTimerType | StopTimerType;

const initialState: TimerState = {
  isRunning: true,
  timers: [],
};

function reducer(state: TimerState, action: Action): TimerState {
  if (action.type === "START_TIMER") {
    return {
      ...state,
      isRunning: true,
    };
  }
  if (action.type === "STOP_TIMER") {
    return {
      ...state,
      isRunning: false,
    };
  }

  if (action.type === "ADD_TIMER") {
    return {
      ...state,
      timers: [
        ...state.timers,
        {
          name: action.payload.name,
          duration: action.payload.duration,
        },
      ],
    };
  }

  return state;
}


export const TimersContext = createContext<TimersContextValue | null>(null);

export default function TimersContextProvider({
  children,
}: TimersContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const TimersContextValu: TimersContextValue = {
    isRunning: state.isRunning,
    timers: state.timers,
    addTimers(timer: Timer) {
      dispatch({ type: "ADD_TIMER", payload: timer });
    },
    startTimers() {
      dispatch({ type: "START_TIMER" });
    },
    stopTimers() {
      dispatch({ type: "STOP_TIMER" });
    },
  };
  return (
    <TimersContext.Provider value={TimersContextValu}>
      {children}
    </TimersContext.Provider>
  );
}
