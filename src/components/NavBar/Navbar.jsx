import { NavLink, useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
function Navbar() {
  const activeStyle = "underline text-black";
  const navigate = useNavigate();
  const context = useContext(CartContext);
  const userName = localStorage.getItem("name");
  const signOut = localStorage.getItem("sign-out");
  const parsedSignOut = JSON.parse(signOut);
  const isUserSignOut = context.signOut || parsedSignOut;

  const handleSignOut = () => {
    const stringifiedSignOut = JSON.stringify(true);
    localStorage.setItem("signOut", stringifiedSignOut);
    context.setSignOut(true);
    navigate("/");
    window.location.reload();
  };

  // eslint-disable-next-line react/prop-types
  const NavItem = ({ children, to }) => (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) => (isActive ? activeStyle : null)}
      >
        {children}
      </NavLink>
    </li>
  );

  const renderReview = () => {
    if (!isUserSignOut) {
      return (
        <li>
          <NavLink to="/sign-in" onClick={() => handleSignOut()}>
            Sign out
          </NavLink>
        </li>
      );
    } else {
      return (
        <>
          <li className="text-black flex justify-center items-center gap-3 text-light">Bienvenido <p className="text-red-600 font-semibold">{userName}</p></li>
          <li>
            <NavItem to="/myorders">My Orders</NavItem>
          </li>
          <li>
            <NavItem to="/account">My Account</NavItem>
          </li>
          <li>
            <NavItem to="/sign-in">
              <button onClick={() => handleSignOut()}>Sign out</button>
            </NavItem>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="flex justify-between items-center fixed z-10 w-full py-5 px-8 text-lg font-normal top-0 flex-wrap">
      <ul className="flex items-center gap-3">
        <li className="font-semibold text-lg ">
          <NavItem to="/" activeClassName={activeStyle}>
            Shopi
          </NavItem>
        </li>
        <li>
          <NavItem to="/all">
            <button onClick={() => context.setCategory("all")}>All</button>
          </NavItem>
        </li>
        <li>
          <NavItem to="/men-clothing">
            <button onClick={() => context.setCategory("men's clothing")}>
              Man Cloth
            </button>
          </NavItem>
        </li>
        <li>
          <NavItem to="/electronics">
            <button onClick={() => context.setCategory("electronics")}>
              Electronics
            </button>
          </NavItem>
        </li>
        <li>
          <NavItem to="/jewelery">
            <button onClick={() => context.setCategory("jewelery")}>
              Jewelery
            </button>
          </NavItem>
        </li>
        <li>
          <NavItem to="/women-clothing">
            <button onClick={() => context.setCategory("women's clothing")}>
              Women Cloth
            </button>
          </NavItem>
        </li>
      </ul>
      <ul className="flex items-center gap-3">
        {renderReview()}
        <li className="text-xl flex justify-between gap-1 items-center">
          <AiOutlineShoppingCart
            onClick={context.openCheckoutCart}
            className="cursor-pointer"
          />
          {context.count}
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
