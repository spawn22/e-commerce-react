/* eslint-disable react/prop-types */
import { useState } from "react";

function Signin({ handleRegistered }) {
  // const context = useContext(CartContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("name", name);
    localStorage.setItem("username", username);
    localStorage.setItem("password", password);
    handleRegistered(username);
  };

  return (
    <form
      onSubmit={handleRegisterSubmit}
      className="mt-48 flex flex-col items-center justify-center"
    >
      <h1 className="font-medium text-xl text-center mb-6 w-80">Registro</h1>
      <div className="flex flex-col  items-center justify-center border p-4 rounded-lg">
      <label className="font-semibold text-sm mb-2 w-full">
          Name:
          <input
            type="text"
            className="border border-black rounded-lg mt-1 w-full px-3 py-2"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <br />
        <label className="font-semibold text-sm mb-2 w-full">
          Email:
          <input
            type="email"
            className="border border-black rounded-lg mt-1 w-full px-3 py-2"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>

        <br />
        <label className="font-semibold text-sm mb-4 w-full">
          Contraseña:
          <input
            type="password"
            className="border border-black rounded-lg mt-1 w-full px-3 py-2"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <button
          type="submit"
          className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-auto py-auto px-auto text-white bg-black m-5 p-5 "
        >
          Registrar
        </button>
      </div>
    </form>
  );
}

export default Signin;
