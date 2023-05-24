import { useRoutes, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import MyAccount from "./Pages/MyAccount/MyAccount";
import MyOrder from "./Pages/MyOrder/MyOrder";
import MyOrders from "./Pages/MyOrders/MyOrders";
import Signin from "./Pages/Signin/Signin";
import NotFound from "./Pages/NotFound/NotFound";
import Navbar from "./components/NavBar/Navbar";
import ShoppingCartContextProvider from "./Context/ShoppingCartContextProvider";
import CheckoutSideMenu from "./components/CheckoutSideMenu/CheckoutSideMenu";


const AppRoutes = () => {
  let routes = useRoutes([
    {
      path: "/",
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
      path: "/myorder/last",
      element: <MyOrder />,
    },
    {
      path: "/myorders",
      element: <MyOrders />,
    },
    {
      path: "/signin",
      element: <Signin />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);
  return routes;
};

function App() {
  return (
    <>
      <ShoppingCartContextProvider> 
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingCartContextProvider>
    </>
  );
}

export default App;
