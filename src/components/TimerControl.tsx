import { useTimersContext } from "../hooks/useTimersContext";
import Button from "./Button";

export default function TimerControl() {
  const timersCtx = useTimersContext();
  return (
    <div>
      <Button
      className="btn"
        onClick={
            timersCtx.isRunning ? timersCtx.stopTimers : timersCtx.startTimers
        }
      >
        {timersCtx.isRunning ? "stop " : "start"}
      </Button>
    </div>
  );
}
