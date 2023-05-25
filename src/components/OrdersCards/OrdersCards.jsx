import { BsChevronRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function OrdersCards({ totalPrice, totalProducts, date }) {
  return (
    <div className="flex justify-between item-center mt-5 mb-3 border border-black rounded-lg p-4 w-80 flex-wrap ">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light">Fecha: {date}</span>
          <span className="font-light">
            Total de productos: {totalProducts}
          </span>
        </p>
        <p className="flex items-center">
          <span className="font-medium text-1xl">Total: ${totalPrice}</span>
          <BsChevronRight className="h-6 w-6 text-black cursor-pointer"/>
        </p>
      </div>
    </div>
  );
}

export default OrdersCards;
