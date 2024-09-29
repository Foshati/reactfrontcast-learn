// import { type ReactNode } from "react";

import { PropsWithChildren } from "react";

// type UserListProps = {
//   userName: string;
//   email: string;
//   children: ReactNode
// };


type UserListProps =PropsWithChildren<{userName:string, email:string}>

export default function UserList({ userName, email , children}: UserListProps) {
  return (
    <div>
      <div>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{children}</p>
      </div>
    </div>
  );
}
