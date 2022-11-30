import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "daniel",
    email: "test@test.com",
  });

  const { username, email } = formState;

  const handleChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {}, []);

  useEffect(() => {}, [formState]);

  useEffect(() => {}, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="username"
        name="username"
        value={username}
        onChange={handleChange}
      />
      <input
        type="text"
        className="form-control mt-2"
        placeholder="email@mail.com"
        name="email"
        value={email}
        onChange={handleChange}
      />

      {username === "daniel2" && <Message />}
    </>
  );
};
