import { useState, useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
// eslint-disable-next-line react/prop-types
function Login({ handleLoggedIn }) {
  const context = useContext(CartContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    // Obtener datos del usuario desde localStorage
    const storedUsername = localStorage.getItem("username");
    const storedPassword = localStorage.getItem("password");
    console.log("Username: ", storedUsername, "Password: ", storedPassword);
    if (storedUsername === username && storedPassword === password) {
      context.setAcc({
        username: storedUsername,
        password: storedPassword,
      });
      handleLoggedIn(username);
    } else {
      alert("Credenciales incorrectas");
    }
  };

  return (
    <form
      onSubmit={handleLoginSubmit}
      className="mt-48 flex flex-col items-center justify-center"
    >
      <h1 className="font-medium text-xl text-center mb-6 w-80">Login</h1>
      <div className="flex flex-col  items-center justify-center border p-4 rounded-lg">
        <label className="font-semibold text-sm mb-2 w-full">
          Usuario:
          <input
            type="mail"
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
          Iniciar sesion
        </button>
      </div>
    </form>
  );
}

export default Login;
