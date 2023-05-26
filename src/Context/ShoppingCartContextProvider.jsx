import { createContext, useState } from "react";
import useFetchFakeStore from "../hooks/useFetchFakeStore";
export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
function ShoppingCartContextProvider({ children }) {
  const { data, loading, error } = useFetchFakeStore();

  const [acc, setAcc] = useState({});
 
  const [signOut, setSignOut] = useState(false);

  const [cartDetailOpen, setCartDetailOpen] = useState(false);
  const [cartCheckoutOpen, setCheckoutOpen] = useState(false);

  const [count, setCount] = useState(0);

  const [products, setProducts] = useState({});

  const [cartProducts, setCartProducts] = useState([]);
  console.log('cart products', cartProducts)
  const [order, setOrder] = useState([]);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("all");

  const openDetailCart = () => setCartDetailOpen(true);
  const closeDetailCart = () => setCartDetailOpen(false);

  const openCheckoutCart = () => setCheckoutOpen(true);
  const closeCheckoutCart = () => setCheckoutOpen(false);

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        openDetailCart,
        closeDetailCart,
        cartDetailOpen,
        products,
        setProducts,
        cartProducts,
        setCartProducts,
        openCheckoutCart,
        closeCheckoutCart,
        cartCheckoutOpen,
        order,
        setOrder,
        data,
        loading,
        error,
        search,
        setSearch,
        category,
        setCategory,
        signOut,
        setSignOut,
        acc,
        setAcc,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
