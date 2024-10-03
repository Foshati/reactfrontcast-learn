import { useRef, type FormEvent } from "react";

type onAddUserProps = {
  onAddUser: (username: string, email: string) => void;
};

export default function AddUser({ onAddUser }: onAddUserProps) {
  const userName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newUserName = userName.current!.value;
    const newEmail = email.current!.value;
    // console.log(newUserName, newEmail);
    event.currentTarget.reset();
    onAddUser(newUserName, newEmail);
  }

  return (
    <div className="flex justify-center m-4 ">
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col max-w-lg gap-4  "
      >
        <input
          type="text"
          placeholder="username"
          id="userName"
          ref={userName}
          className="input bg-black"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          ref={email}
          className="input bg-black"
        />
        <button className="btn" type="submit">
          add user
        </button>
      </form>
    </div>
  );
}
