import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { collection, serverTimestamp, setDoc, doc, updateDoc, increment } from "firebase/firestore";
import { db } from "./FirebaseConfig";

const Cart = () => {
  const cartContext = useContext(CartContext);
  const navigate = useNavigate();

  const createOrder = () => {
    const itemsForDB = cartContext.cartList.map((item) => ({
      id: item.id,
      price: item.price,
      title: item.title,
      qty: item.quantity,
    }));

    let order = {
      buyer: {
        email: "Danny@email.com",
        nombre: "Danny",
        phone: "12355324",
      },
      date: serverTimestamp(),
      items: itemsForDB,
      total: cartContext.calcTotal(),
    };
    const createOrderInFirestore = async () => {
      const newOrderRef = doc(collection(db, "orders"));
      await setDoc(newOrderRef, order);
      return newOrderRef;
    };
    createOrderInFirestore()
      .then((result) => alert("Your ID Orders is " + result.id))
      .catch((err) => console.log(err));

    cartContext.cartList.forEach(async item => {
      const itemRef = doc(db, "products", item.id);
      await updateDoc(itemRef, {
        stock: increment(-item.quantity)
      })
    });
    cartContext.clear();
  };

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
            <div className="row mt-5">
              <div className="col-md-8">
                {cartContext.cartList.map((item) => (
                  <div className="row mb-5" key={item.id}>
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
                      <p>
                        {item.quantity} Items / ${item.price} each
                      </p>
                      <p>$ {cartContext.totalPerItem(item.id)}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="col-md-4">
                <div className="summary">
                  <h3 className="mb-3">ORDER SUMMARY</h3>
                  <div className="data-summary">
                    <p>Subtotal</p>
                    <p>$ {cartContext.calcSubTotal()}</p>
                  </div>
                  <div className="data-summary">
                    <p>Taxes</p>
                    <p>$ 10000</p>
                  </div>
                  <div className="data-summary">
                    <p className="total-text">Total</p>
                    <p className="total-text">$ {cartContext.calcTotal()}</p>
                  </div>
                  <button
                    className="btn btn-checkout mt-4 mb-2"
                    onClick={() => createOrder()}
                  >
                    TERMINAR MI COMPRA
                  </button>
                  <Toaster />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
