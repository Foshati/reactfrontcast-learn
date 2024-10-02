import { type FormEvent } from "react";

export default function AddUser() {
  function handleSubmitForm(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get("userName");
    const email = formData.get("email");
    console.log(username, email);
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
          name="userName"
          className="input bg-black"
        />
        <input
          type="text"
          placeholder="email"
          id="email"
          name="email"
          className="input bg-black"
        />
        <button className="btn" type="submit">
          add user
        </button>
      </form>
    </div>
  );
}
