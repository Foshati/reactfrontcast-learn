type timerProps = {
  name: string;
  duration: number;
};

export default function Timer({ name, duration }: timerProps) {
  return (
    <div>
      <p>{name}</p>
      <p>{duration}</p>
    </div>
  );
}
