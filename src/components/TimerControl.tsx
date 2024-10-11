import { useContext } from "react";
import Button from "./Button";
import { TimersContext } from "../store/TimeContext";

export default function TimerControl() {
   const TimersContextCtx= useContext(TimersContext)
  return (
    <div>
      <Button>add timers</Button>
    </div>
  );
}
