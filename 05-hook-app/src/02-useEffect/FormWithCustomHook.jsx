import { useForm } from "../hooks/useForm";

export const FormWithCustomHook = () => {
  const { formState, handleChange, handleReset, username, email, password } =
    useForm({
      username: "",
      email: "",
      password: "",
    });

  return (
    <>
      <h1>Formulario con custom hook</h1>
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
      <input
        type="text"
        className="form-control mt-2"
        placeholder="Contraseña"
        name="password"
        value={password}
        onChange={handleChange}
      />

      <button onClick={handleReset} className="btn btn-primary mt-2">
        Reset
      </button>
    </>
  );
};
