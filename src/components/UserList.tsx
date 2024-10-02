
import { UserPrprs } from "../App";
import UserItem from "./UserItem";


type UserListProps ={
    Users:  UserPrprs[]
    handleRemoveUser: (id:number)=>void
}

export default function UserList({ Users , handleRemoveUser }:UserListProps) {
  return (
    <div>
      {Users.map((user) => (
        <div key={user.id}>
          <UserItem userName={user.username} email={user.email}  handleRemoveUser={handleRemoveUser} id={user.id}/>
        </div>
      ))}
    </div>
  );
}
