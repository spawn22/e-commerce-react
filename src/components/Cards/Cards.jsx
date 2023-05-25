import { useContext } from "react";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import {  AiOutlineCheck } from "react-icons/ai";
// eslint-disable-next-line react/prop-types
function Cards({ data }) {
  const context = useContext(CartContext);
  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const showProducts = (productDetail) => {
    context.openDetailCart();
    context.setProducts(productDetail);
    context.closeCheckoutCart();
  };

  const addProductsToCart = (productData) => {
    context.openCheckoutCart();
    context.setCount(context.count + 1);
    context.setCartProducts([...context.cartProducts, productData]);
    context.closeDetailCart();
  };

  const renderProduct = (product, id) => {
    const isInCart =
      context.cartProducts.filter((p) => p.id === id).length > 0;
      
   return isInCart ? (
      <div className="absolute top-0 right-0 bg-gray-600 text-black px-2 py-1 flex justify-center items-center w-8 h-6 rounded-full m-2">
        <AiOutlineCheck className="text-2xl text-white"/>
      </div>
    ) : (
      <div
        className="absolute top-0 right-0 bg-gray-600 text-white text-lg px-2 py-1 flex justify-center items-center w-8 h-6 rounded-full m-2"
        onClick={(e) => {
          e.stopPropagation && e.stopPropagation();
          addProductsToCart(product);
        }}
      >
        +
      </div>
    );
  };

  return (
    <div className="bg-white cursor-pointer w-full h-full  rounded-lg flex justify-center items-center  flex-wrap gap-28 mt-10">
      {/* eslint-disable-next-line react/prop-types */}
      {data.map((product) => (
        <div
          key={product.id}
          className="bg-white cursor-pointer w-66 h-80  rounded-lg"
          onClick={() => showProducts(product)}
        >
          <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white text-black text-xs px-3 py-0.5 rounded-lg m-2 font-semibold">
              {product.title}
            </span>
            <img
              className="w-56 h-full object-cover rounded-lg"
              src={product.image}
              alt={product.title}
            />
            {renderProduct(product, product.id)}
          </figure>
          <p className="flex justify-between items-center gap-10">
            <span className="text-sm font-medium text-gray-600">
              {capitalizeFirstLetter(product.category)}
            </span>
            <span className="text-lg font-bold ">${product.price}</span>
          </p>
        </div>
      ))}
    </div>
  );
}

export default Cards;
