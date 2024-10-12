import { useTimersContext } from "../hooks/useTimersContext";
import Button from "./Button";

export default function TimerControl() {
  const timersCtx = useTimersContext();
  return (
    <div>
      <Button>{timersCtx.isRunning ? "stop" : "start"}</Button>
    </div>
  );
}
