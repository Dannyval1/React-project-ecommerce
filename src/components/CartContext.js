import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addItem = (item, quantity) => {
    const queryInCart = cartList.find((shirt) => shirt.id === item.id);
    if (queryInCart === undefined) {
      item.quantity = quantity;
      setCartList([...cartList, item]);
    } else {
      queryInCart.quantity += quantity;
    }
  };

  const removeItem = (id) => {
    const itemsRemoved = cartList.filter((item) => item.id !== id);
    setCartList(itemsRemoved);
  };

  const clear = () => {
    setCartList([]);
  };

  return (
    <CartContext.Provider value={{ cartList, addItem, removeItem, clear }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
