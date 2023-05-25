import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
function Navbar() {
  const activeStyle = "underline text-black";
  const context = useContext(CartContext);
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
        <li className="text-red-500">lucasruiz199@gmail.com</li>
        <li>
          <NavItem to="/myorders">My Orders</NavItem>
        </li>
        <li>
          <NavItem to="/account">My Account</NavItem>
        </li>
        <li>
          <NavItem to="/signin">Sign In</NavItem>
        </li>
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
