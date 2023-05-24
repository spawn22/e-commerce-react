import { AiOutlineClose } from "react-icons/ai";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import { useContext } from "react";
function CardDetails() {
  const context = useContext(CartContext);
  
  return (
    <aside
      className={`${
        context.cartDetailOpen ? "flex" : "hidden"
      } w-[400px] h-[calc(100vh-68px)] top-[68px] flex flex-col fixed bg-white right-0  border border-black rounded-lg`}
    >
      <div className="flex justify-between items-center ">
        <h2 className="font-medium text-xl ml-44">Detail</h2>
        <div className="cursor-pointer text-1xl mr-1" onClick={context.closeDetailCart}>
          <AiOutlineClose />
        </div>
      </div>
      <figure className="px-6 mt-3">
        <img
          className="w-full h-full rounded-lg"
          src={context.products.image}
          alt={context.products.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">${context.products.price}</span>
        <span className="font-medium text-xl">{context.products.title}</span>
        <span className="font-light text-sm">{context.products.description}</span>
      </p>
    </aside>
  );
}

export default CardDetails;
