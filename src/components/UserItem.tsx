import { type PropsWithChildren } from "react";

type UserListProps = PropsWithChildren<{ userName: string; email: string }>;

export default function UserItem({ userName, email, children }: UserListProps) {
  return (
    <div>
      <div className="m-4 p-4">
        <p>{userName}</p>
        <p>{email}</p>
        <p>{children}</p>
        <button className="btn">delete</button>
      </div>
    </div>
  );
}
