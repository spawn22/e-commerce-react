import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Navbar from "../../components/NavBar/Navbar";
import Layout from "../../components/Layout/Layout";

function MyAccount() {
  const navigate = useNavigate();
  const [name, setName] = useState(localStorage.getItem("name"));
  const [password, setPassword] = useState(localStorage.getItem("password"));
  const [username, setUsername] = useState(localStorage.getItem("username"));
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      localStorage.setItem("name", name);
      localStorage.setItem("username", username);
      localStorage.setItem("password", password);
    } catch (error) {
      console.log(error);
    }
    alert("Cambios asegurados con exito");
    navigate("/");
    window.location.reload();
  };

  return (
    <Layout>
      <>
        <Navbar />
        <form
          onSubmit={handleSubmit}
          className="mt-20 flex flex-col items-center justify-center"
        >
          <h1 className="font-medium text-xl text-center mb-6 w-80">
            Mi cuenta
          </h1>
          <div className="flex flex-col items-center justify-center border p-4 rounded-lg">
            <label className="font-semibold text-sm mb-2 w-full">
              Nombre:{" "}
            </label>
            <input
              type="text"
              className="border border-black rounded-lg mt-1 w-full px-3 py-2"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <br />
            <label className="font-semibold text-sm mb-2 w-full">Email: </label>
            <input
              type="email"
              className="border border-black rounded-lg mt-1 w-full px-3 py-2"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <br />
            <div className="relative">
              <label className="font-semibold text-sm mb-2 w-full">
                Contraseña:{" "}
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="border border-black rounded-lg mt-1 w-full px-3 py-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {showPassword ? (
                <FiEye
                  onClick={() => setShowPassword(false)}
                  className="absolute right-2 text-2xl  top-1/2 transform-translate-y-1/2 text-black/40"
                />
              ) : (
                <FiEyeOff
                  onClick={() => setShowPassword(true)}
                  className="absolute right-2 text-2xl  top-1/2 transform-translate-y-1/2 text-black/40"
                />
              )}
            </div>
            <br />
            <button
              type="submit"
              className="border border-black disabled:text-black/40 disabled:border-black/40 rounded-lg mt-auto py-auto px-auto text-white bg-black m-5 p-5"
            >
              Guardar Cambios
            </button>
          </div>
        </form>
      </>
    </Layout>
  );
}

export default MyAccount;
