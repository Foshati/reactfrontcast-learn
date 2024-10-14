import { useTimersContext } from "../hooks/useTimersContext";
import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export default function AddTime() {
  const { addTimers } = useTimersContext();
  function handleSave(event: unknown) {
    const data = event as { name: string; duration: number };
    // console.log(data);

    addTimers({ name: data.name, duration: data.duration });
  }
  return (
    <div>
      <Form onSave={handleSave}>
        <Input className="input bg-black" placeholder="name" id="name" />
        <Input
          className="input bg-black"
          placeholder="duration"
          id="duration"
        />
        <Button className="btn">add name</Button>
      </Form>
    </div>
  );
}
