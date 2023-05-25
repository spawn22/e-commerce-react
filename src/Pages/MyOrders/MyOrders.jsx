import OrdersCards from "../../components/OrdersCards/OrdersCards";
import Layout from "../../components/Layout/Layout";
import { CartContext } from "../../Context/ShoppingCartContextProvider";
import { useContext } from "react";
import { Link } from "react-router-dom";

function MyOrders() {
  const context = useContext(CartContext);



  return (
    <Layout>
      <div className="overflow-y-auto flex-1 mt-20 w-[17%] mx-auto ">
      <div className="flex justify-center  flex-1 ">
        <h1 className="text-lg font-bold">My Orders</h1>
      </div>

      {context.order.map((product, index) => (
        <Link key={index} to={`/myorder/${product.id}`}>
          <OrdersCards
            totalPrice={product.totalPrice}
            totalProducts={product.totalProducts}
            products={product.products}
            date={product.date}
            id={product.id}
            key={product.id}
          />
        </Link>
      ))}
      </div>
    </Layout>
  );
}

export default MyOrders;
