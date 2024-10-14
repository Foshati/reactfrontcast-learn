import { useTimersContext } from "../hooks/useTimersContext";
import Button from "./Button";

export default function TimerControl() {
  const timersCtx = useTimersContext();
  return (
    <div>
      <Button
        onClick={
          timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.stopTimers
        }
      >
        {timersCtx.isRunning ? "stop " : "start"} timers
      </Button>
    </div>
  );
}
