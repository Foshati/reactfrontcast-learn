import { useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";
import Input from "./components/Input";
import Button from "./components/Button";

export type UserPrprs = {
  username: string;
  email: string;
  id: number;
};

export default function App() {
  const [Users, setUsers] = useState<UserPrprs[]>([]);
  const [error, setError] = useState<string | null>(null);

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

        <p>
          <Button href="https://google.com">google</Button>
        </p>
      </div>
    </>
  );
}
