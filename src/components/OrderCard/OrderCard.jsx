import { AiOutlineClose } from "react-icons/ai";

// eslint-disable-next-line react/prop-types
function OrderCard({ id, title, image, price, handleDelete, }) {
  return (
    <div className="flex justify-between item-center mt-5 flex-wrap w-auto gap-5">
      <div className="flex item-center flex-wrap gap-2">
        <figure className="w-20 h-20 flex-wrap">
          <img
            className="w-full h-full rounded-full object-cover"
            src={image}
            alt={title}
          />
        </figure>
        <p className="text-lg font-light flex-wrap w-44">{title}</p>
      </div>
      <div className="flex item-center gap-2">
        <p className="text-lg font-bold text-black">${price}</p>

        {handleDelete ? (
          <AiOutlineClose
            onClick={() => handleDelete(id)}
            className="text-xl text-red-500 cursor-pointer"
          />
        ) : null}
      </div>
    </div>
  );
}

export default OrderCard;
