import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export default function AddTime() {
  function handleSave(event: unknown) {
    const data = event as { name: string; duration: number };
    console.log(data);
  }
  return (
    <div>
      <Form onSave={handleSave}>
        <Input className="input bg-black" placeholder="name" id="name" />
        <Input className="input bg-black" placeholder="duration" id="duration" />
        <Button className="btn">add name</Button>
      </Form>
    </div>
  );
}
