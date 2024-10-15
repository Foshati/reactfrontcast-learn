import { useEffect, useState } from "react";
import UserList from "./components/UserList";
import AddUser from "./components/AddUser";

import AddTime from "./components/AddTime";
import TimersContextProvider from "./store/TimeContext";
import TimerControl from "./components/TimerControl";
import Modal from "./components/Modal";
import TimerList from "./components/TimerList";
import PostList from "./components/PostList";
import { get } from "./utils/fetch";
import TodosList from "./components/TodosList";


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

 
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedData = await get(
        "https://jsonplaceholder.typicode.com/todos"
      );
      setData(fetchedData.slice(0,5));
    };

    fetchData();
  }, []);

  return (
    <>
      <TimersContextProvider>
        <div className="divider my-4">Add User </div>

        <AddUser onAddUser={handleAddUser} />
        {/* <button className="btn" onClick={handleAddUser}>
        add user
      </button> */}

        <div>{error && <p className="text-red-500 mx-6">{error}</p>}</div>
        <UserList Users={Users} handleRemoveUser={handleRemoveUser} />
        <div className="divider my-4">Timer </div>
        <div className="flex flex-col justify-center items-center ">
          <AddTime />
          <TimerControl />
          <TimerList />
        </div>
        <div className="divider my-4">Modal </div>

        <Modal/>
        <div className="divider my-4">PostList </div>
        <PostList />

        <div className="divider my-4">TodosList </div>
        <div>
          {data.map((item) => (
            <div >
              <TodosList data={[item]} />
            </div>
          ))}
        </div>
      </TimersContextProvider>
    </>
  );
}
