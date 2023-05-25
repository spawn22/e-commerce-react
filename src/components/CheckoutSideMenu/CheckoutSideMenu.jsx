import { CartContext } from "../../Context/ShoppingCartContextProvider";
import { Link } from "react-router-dom";
import { useContext } from "react";
import OrderCard from "../OrderCard/OrderCard";
import { AiOutlineClose } from "react-icons/ai";
import { totalPrice } from "../../utils/totalPrice";
function CheckoutSideMenu() {
  const context = useContext(CartContext);
  
  const date = new Date();
  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };

  const handleCheckout = () => {
    const orderToAdd = {
      id: Math.random().toString(16).slice(2),
      date: date.toLocaleDateString('es-Es'),
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts),
    };
    context.setOrder([...context.order, orderToAdd]);
    context.setCartProducts([]);
    context.setCount(0);
    context.closeCheckoutCart();
  };

  return (
    <aside
      className={`${
        context.cartCheckoutOpen ? "flex" : "hidden"
      } w-[500px] h-[calc(100vh-68px)] top-[68px] flex flex-col fixed bg-white right-0  border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl ml-52">My Order</h2>
        <div
          className="cursor-pointer text-1xl mr-1"
          onClick={context.closeCheckoutCart}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="overflow-y-scroll flex-1">
        {context.cartProducts.map((product) => (
          <OrderCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            image={product.image}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div className="px-6 mb-2">
        <p className="flex items-center justify-between mt-5 mb-2">
          <span className="font-medium text-lg">Total</span>
          <span className="ml-2 font-bold text-lg">
            $ {totalPrice(context.cartProducts)}
          </span>
        </p>
        <Link to="/myorder/last">
          <button
            className="bg-black text-white w-96 flex justify-center items-center mx-auto mt-auto mb-5 py-7  rounded-lg"
            onClick={() => handleCheckout()}
          >
            Checkout
          </button>
        </Link>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
