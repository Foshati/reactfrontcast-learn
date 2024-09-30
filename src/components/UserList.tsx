import { type FC, type PropsWithChildren } from "react";

type UserListProps = PropsWithChildren<{ userName: string; email: string }>;

const UserList: FC<UserListProps> = ({ userName, email, children }) => {
  return (
    <div>
      <div>
        <p>{userName}</p>
        <p>{email}</p>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default UserList;
