
import { UserPrprs } from "../App";
import UserItem from "./UserItem";


type UserListProps ={
    Users:  UserPrprs[]
}

export default function UserList({ Users }:UserListProps) {
  return (
    <div>
      {Users.map((user) => (
        <div key={user.id}>
          <UserItem userName={user.username} email={user.email} />
        </div>
      ))}
    </div>
  );
}
