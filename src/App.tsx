import { useState } from "react";
import UserList from "./components/UserList";

type UserPrprs = {
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

  return (
    <>
      <button className="btn" onClick={handleAddUser}>
        add user
      </button>

      {Users.map((user) => (
        <div key={user.id}>
          <UserList userName={user.username} email={user.email} />
        </div>
      ))}
    </>
  );
}
