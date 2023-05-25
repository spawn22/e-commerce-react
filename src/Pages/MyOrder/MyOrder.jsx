import { useContext } from "react";
import Layout from "../../components/Layout/Layout";
import OrderCard from "../../components/OrderCard/OrderCard";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";

function MyOrder() {
  const context = useContext(CartContext);
  const { orderParam } = useParams();

  const isLastOrder = orderParam === "last";

  let selectedOrder;

  if (isLastOrder) {
    selectedOrder = context.order.slice(-1)[0];
  } else {
    selectedOrder = context.order.find((order) => order.id === orderParam);
  }

  return (
    <Layout>
      <div className="overflow-y-auto flex-1 mt-32 w-auto mx-auto  ">
        <div className="flex justify-center items-center mb-10 text-3xl font-bold text-gray-700 gap-5 mr-20">
          <Link to="/myorders">
            <BsFillArrowLeftCircleFill className="text-2xl cursor-pointer mr-10" />
          </Link>
          <h1 className="text-lg font-bold">My Order</h1>
        </div>
        {context.order?.length === 0 ? (
          <div className="flex justify-center items-center text-2xl font-bold text-gray-700 gap-44 mt-48 flex-wrap flex-col">
            <h1 className="text-3xl font-bold text-red-600 ">No hay pedidos</h1>
            <Link to="/">
              <button className="bg-blue-600 text-white p-2 rounded-md cursor-pointer">
                Volver al Home
              </button>
            </Link>
          </div>
        ) : (
          selectedOrder?.products.map((product) => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.image}
            />
          ))
        )}
      </div>
    </Layout>
  );
}

export default MyOrder;
