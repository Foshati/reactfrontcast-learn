import { type PropsWithChildren } from "react";

type UserListProps = PropsWithChildren<{ userName: string; email: string; id:number, handleRemoveUser: (id:number)=>void }>;

export default function UserItem({ userName, email, children ,handleRemoveUser, id}: UserListProps) {
  return (
    <div>
      <div className="m-4 p-4">
        <p>{userName}</p>
        <p>{email}</p>
        <p>{children}</p>
        <button onClick={()=> handleRemoveUser(id)} className="btn">delete</button>
      </div>
    </div>
  );
}
