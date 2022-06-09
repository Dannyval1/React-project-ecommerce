import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";

const Cart = () => {
  const cartContext = useContext(CartContext);

  return (
    <div className="cart-page">
      {cartContext.cartList.length === 0 ? (
        <div className="body-cart-empty mt-5">
          <h3 className="text-center">YOUR CART</h3>
          <Link to="/">
            <button className="btn btn-primary mt-4 mb-2">
              Continue Shopping
            </button>
          </Link>
          <p>Your cart is empty</p>
        </div>
      ) : (
        <div className="body-cart mt-5">
          <div className="container">
            <div className="row">
              <h3 className="text-center">YOUR CART</h3>
              <div className="col-md-6 d-flex justify-content-center">
                <Link to="/" className="btn btn-primary mt-4 mb-2">
                  Continue Shopping
                </Link>
              </div>
              <div className="col-md-6 d-flex justify-content-center">
                <button
                  className="btn btn-delete mt-4 mb-2"
                  onClick={() => cartContext.clear()}
                >
                  Delete All Products
                </button>
              </div>
            </div>
            <div className="mt-5">
              {cartContext.cartList.map((item) => (
                <div className="row mb-5">
                  <div className="card card-item col-md-2">
                    <Link className="link-to-item" to={`/item/${item.id}`}>
                      <img src={item.pictureUrl} />
                    </Link>
                  </div>
                  <div className="col-md-3 info-delete-item">
                    <p>
                      <b>Product Name:</b> {item.title}
                    </p>
                    <button
                      className="btn delete-item"
                      onClick={() => cartContext.removeItem(item.id)}
                    >
                      Delete
                    </button>
                  </div>
                  <div className="col-md-7 item-cost">
                    <p>Items {item.quantity}</p>
                    <p>{item.price} Each</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
