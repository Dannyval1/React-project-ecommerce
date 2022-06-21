import React, { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const taxValue = 10000;

  const addItem = (item, quantity) => {
    const queryInCart = cartList.find((shirt) => shirt.id === item.id);
    if (queryInCart === undefined) {
      item.quantity = quantity;
      setCartList([...cartList, item]);
    } else {
      queryInCart.quantity += quantity;
      setCartList([...cartList]);
    }
  };

  const removeItem = (id) => {
    const itemsRemoved = cartList.filter((item) => item.id !== id);
    setCartList(itemsRemoved);
  };

  const clear = () => {
    setCartList([]);
  };

  const calcProductsQty = () => {
    const variable = cartList.reduce((prev, item) => prev + item.quantity, 0);
    return variable;
  };

  const totalPerItem = (id) => {
    let i = cartList.map(item => item.id).indexOf(id);
    return cartList[i].price * cartList[i].quantity;
  };

  const calcSubTotal = () => {
    let totalItem = cartList.map((item) => totalPerItem(item.id));
    return totalItem.reduce((prev, curr) => prev + curr);
  };

  const calcTotal = () => {
    return taxValue + calcSubTotal();
  };

  return (
    <CartContext.Provider
      value={{
        cartList,
        addItem,
        removeItem,
        clear,
        calcProductsQty,
        totalPerItem,
        calcSubTotal,
        calcTotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
