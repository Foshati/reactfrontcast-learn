import { useRef, useState, type FormEvent } from "react";

type onAddUserProps = {
  onAddUser: (username: string, email: string) => void;
};

export default function AddUser({ onAddUser }: onAddUserProps) {
  const userName = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const [error, setError] = useState<string | null>(null);

  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newUserName = userName.current!.value.trim();
    const newEmail = email.current!.value.trim();

    if (!newUserName || !newEmail) {
      const errorMsg = "Fields cannot be empty";
      return setError(errorMsg);
    }

    event.currentTarget.reset();

    onAddUser(newUserName, newEmail);
  }

  return (
    <div className="flex flex-col items-center justify-center m-4">
      <form
        onSubmit={handleSubmitForm}
        className="flex flex-col max-w-lg gap-4"
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
          Add user
        </button>
      </form>
      <p className="text-red-500 m-4">{error}</p>
    </div>
  );
}
