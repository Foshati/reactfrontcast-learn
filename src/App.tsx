import { useState, useRef } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import Button from "./components/Button";
import Container from "./components/Container";
import Input from "./components/Input";
import Form from "./components/Form";

export type UserPrprs = {
  username: string;
  email: string;
  id: number;
};

export default function App() {
  const [Users, setUsers] = useState<UserPrprs[]>([]);
  const [error, setError] = useState<string | null>(null);

  const addInput = useRef<HTMLInputElement>(null);

  function handleAddUser(username: string, email: string) {
    setUsers((prevUser) => {
      if (prevUser.length >= 3) {
        // throw new Error("user limit reached");
        const errorMsg = "Cannot add more than 3 users";
        setError(errorMsg);
        return prevUser;
      }

      const newUser: UserPrprs = {
        username,
        email,
        id: Math.random(),
      };

      return [...prevUser, newUser];
    });
  }

  function handleRemoveUser(id: number) {
    setUsers((prevUser) => prevUser.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddUser onAddUser={handleAddUser} />
      {/* <button className="btn" onClick={handleAddUser}>
        add user
      </button> */}

      <div>{error && <p className="text-red-500 mx-6">{error}</p>}</div>
      <UserList Users={Users} handleRemoveUser={handleRemoveUser} />
      <div>
        <p>
          <Button>click</Button>
        </p>
        <Container ComponentName={Button} onClick={() => console.log("hi ali")}>
          add user
        </Container>

        <Form>
          <Input placeholder="title" id="title" />
          <Input placeholder="title" id="title" />
          <button>add product</button>
        </Form>
      </div>
    </>
  );
}
