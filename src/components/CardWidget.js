import React, { useContext, useEffect } from "react";
import iconMarket from "./../assets/market-icon.png";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

export const CardWidget = () => {
  const cartContext = useContext(CartContext);

  return (
    <Link to="/cart" className="btnMarket">
      <img
        src={iconMarket}
        className="iconMarket"
        alt="Logo"
        width="30"
        height="auto"
      />
      <p className="count-product-added">
        {cartContext.calcProductsQty()}
      </p>
    </Link>
  );
};

export default CardWidget;
