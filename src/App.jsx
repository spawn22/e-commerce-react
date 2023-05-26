import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyOrder from "./Pages/MyOrder/MyOrder";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Signin from "./Pages/Signin/Signin";
import NotFound from "./Pages/NotFound/NotFound";
import ShoppingCartContextProvider from "./Context/ShoppingCartContextProvider";
import CheckoutSideMenu from "./components/CheckoutSideMenu/CheckoutSideMenu";
import Login from "./Pages/Login/Login";
import { useState } from "react";

const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:category",
      element: <Home />,
    },
    {
      path: "/account",
      element: <MyAccount />,
    },
    {
      path: "/myorder",
      element: <MyOrder />,
    },
    {
      path: "/myorder/:orderParam",
      element: <MyOrder />,
    },
    {
      path: "/myorders",
      element: <MyOrders />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  const [registeredUser, setRegisteredUser] = useState("");
  
  const [loggedIn, setLoggedIn] = useState(false);
  
  const handleRegistered = (username) => {
    setRegisteredUser(username);
    alert(`Usuario ${username} registrado con éxito`);
  };

  const handleLoggedIn = (username) => {
    alert(`Bienvenido ${username}`);
    setLoggedIn(true);
  };

  return (
    <>
      <ShoppingCartContextProvider>
        {!loggedIn ? (
          <>
            {!registeredUser ? (
              <>
                <Signin handleRegistered={handleRegistered} to="/login" />
                <p>
                  Tenes cuenta ya? Logea{" "}
                  <button onClick={() => setRegisteredUser("user")} className="underline text-black font-bold">
                    Aqui
                  </button>
                </p>
              </>
            ) : (
              <>
                <Login handleLoggedIn={handleLoggedIn} />
                <p>
                  No tenes cuenta? Registra tu cuenta{" "}
                  <button onClick={() => setRegisteredUser("")} className="underline text-black font-bold">
                    Aqui
                  </button>
                </p>
              </>
            )}
          </>
        ) : null}
        <BrowserRouter>
          <AppRoutes />
          
          <CheckoutSideMenu />
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </>
  );
}

export default App;
