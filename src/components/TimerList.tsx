import { useTimersContext } from "../hooks/useTimersContext";
import Timer from "./Timer";

export default function TimerList() {
  const { timers } = useTimersContext();
  return (
    <div>
      <ul>
        {timers.map((item) => (
          <li key={item.name}>
            <Timer {...item} />
          </li>
        ))}
      </ul>
    </div>
  );
}
