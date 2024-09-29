import UserList from "./components/UserList";

export default function App() {
  return (
    <main className="flex flex-col justify-center items-center  gap-10 p-4 m-4">
      <UserList  userName="ali" email="ali@gmail.com" children/>
      <UserList userName="reza" email="reza@gmail.com" children/>
      <UserList userName="sina" email="sina@gmail.com">
        <p>props-children</p>
      </UserList>
    </main>
  );
}
