import Button from "./Button";
import Form from "./Form";
import Input from "./Input";

export default function AddTime() {
  function handleSave(event: unknown) {
    const data = event as { title: string; name: string };
    console.log(data);
  }
  return (
    <div>
      <Form onSave={handleSave}>
        <Input className="input bg-black" placeholder="title" id="title" />
        <Input className="input bg-black" placeholder="name" id="name" />
        <Button className="btn">add name</Button>
      </Form>
    </div>
  );
}
