import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function OrderCard({ id, title, image, price, handleDelete }) {
  return (
    <div className="flex justify-between item-center mt-5">
      <div className="flex item-center gap-2">
        <figure className="w-20 h-20">
          <img
            className="w-full h-full rounded-full object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>
      <div className="flex item-center gap-2">
        <p className="text-lg font-bold text-black">${price}</p>
        <AiOutlineClose
          onClick={() => handleDelete(id)}
          className="text-xl text-red-500 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default OrderCard;
