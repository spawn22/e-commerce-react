

// eslint-disable-next-line react/prop-types
function OrdersCards({ totalPrice, totalProducts, date }) {
  return(
    <div className="flex justify-between item-center mt-5 border-black ">
        <p>
            <span>Total de productos</span>
            <span>Fecha: {date}</span>
            <span>{totalProducts}</span>
            <span>{totalPrice}</span>
        </p>
    </div>
  )
  
}

export default OrdersCards;
