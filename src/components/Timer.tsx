import { useEffect, useState } from "react";
import { useTimersContext } from "../hooks/useTimersContext";

type timerProps = {
  name: string;
  duration: number;
};

export default function Timer({ name, duration }: timerProps) {
  const { isRunning } = useTimersContext();

  const [remainingTime, setRemainingTime] = useState(duration * 1000);

  useEffect(() => {
    let timer: number | null = null;

    if (isRunning) {
      timer = setInterval(() => {
        setRemainingTime((prevTime) => Math.max(prevTime - 30, 0));
      }, 30);
    } else if (!isRunning && timer) {
      clearInterval(timer);
    }

    return () => {
      if (timer) {clearInterval(timer);}
    };
  }, [isRunning]);

  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);

  return (
    <div>
      <h2>{name}</h2>
      <p>{formattedRemainingTime}</p>
    </div>
  );
}
