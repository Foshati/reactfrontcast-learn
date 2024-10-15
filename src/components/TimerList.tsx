import { useTimersContext } from "../hooks/useTimersContext";
import Timer from "./Timer";

export default function TimerList() {
  const { timers } = useTimersContext();
  return (
    <div>
      <ul>
        {timers.map((item) => (
          <li className="card bg-black w-48 p-4 m-4" key={item.name}>
            <Timer  {...item} />
            {/* <Timer name={item.name} duration={item.duration} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}
