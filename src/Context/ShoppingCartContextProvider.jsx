import { createContext, useState } from "react";

export const CartContext = createContext();

// eslint-disable-next-line react/prop-types
function ShoppingCartContextProvider({ children }) {
  const [cartDetailOpen, setCartDetailOpen] = useState(false);
  const [cartCheckoutOpen, setCheckoutOpen] = useState(false);
  
  const [count, setCount] = useState(0);

  const [products, setProducts] = useState({});

  const [cartProducts, setCartProducts] = useState([]);

  const [order, setOrder] = useState([]);

  

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
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default ShoppingCartContextProvider;
