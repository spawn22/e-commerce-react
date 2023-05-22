import { CartContext } from "../../Context/ShoppingCartContextProvider";
import { useContext } from "react";
import OrderCard from "../OrderCard/OrderCard";
import { AiOutlineClose } from "react-icons/ai";
import { totalPrice } from "../../utils/totalPrice";
function CheckoutSideMenu() {
  const context = useContext(CartContext);

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(
      (product) => product.id !== id
    );
    context.setCartProducts(filteredProducts);
    context.setCount(context.count - 1);
  };



  return (
    <aside
      className={`${
        context.cartCheckoutOpen ? "flex" : "hidden"
      } w-[500px] h-[calc(100vh-68px)] top-[68px] flex flex-col fixed bg-white right-0  border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl">My Order</h2>
        <div
          className="cursor-pointer text-1xl mr-1"
          onClick={context.closeCheckoutCart}
        >
          <AiOutlineClose />
        </div>
      </div>
      <div className="overflow-y-scroll ">
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
      <div className="px-6 ">
        <p className="flex items-center justify-between mt-5">
            <span className="font-medium text-lg">Total</span>
            <span className="ml-2 font-bold text-lg">$ {totalPrice(context.cartProducts)}</span>
        </p>
      </div>
    </aside>
  );
}

export default CheckoutSideMenu;
