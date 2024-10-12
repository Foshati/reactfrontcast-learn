import { useContext } from "react";
import { TimersContext } from "../store/TimeContext";

export function useTimersContext() {
  const timerCtx = useContext(TimersContext);
  if (timerCtx === null) {
    throw new Error("TimersContext is null");
  }
  return timerCtx;
}
