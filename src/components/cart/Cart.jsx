import "./cart.css";

const Cart = ({ cartItems , deleteProduct }) => {
  let total = 0;
  return (
    <div className="carts">
     

      {cartItems.map((item) => {
        total = total + item.price
        return (
          <div className="cart-product" key={item.id}>
            <img src={item.image ? item.image : item.thumbnail} alt="" />
            <h3>Price : {item.price}$</h3>
            <button onClick={() => deleteProduct(item)}>Remove Product</button>
          </div>
        );
      })}
       <div className="total">
        <h2>Total : </h2>
        <span>{total.toString().slice(0 , 6)} $</span>
      </div>
    </div>
  );
};

export default Cart;
