import { useState } from "react";
import UserList from "./components/UserList";

export type UserPrprs = {
  username: string;
  email: string;
  id: number;
};

export default function App() {
  const [Users, setUsers] = useState<UserPrprs[]>([]);

  function handleAddUser() {
    setUsers((prevUser) => {
      const newUser: UserPrprs = {
        username: "ali",
        email: "ali@gmail.com",
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
      <button className="btn" onClick={handleAddUser}>
        add user
      </button>
      <UserList Users={Users}  handleRemoveUser={handleRemoveUser}/>
    </>
  );
}
