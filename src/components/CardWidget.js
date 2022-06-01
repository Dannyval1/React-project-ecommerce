import React from "react";
import iconMarket from "./../assets/market-icon.png";

export const CardWidget = () => {
  return (
    <button className="btnMarket">
      <img
        src={iconMarket}
        className="iconMarket"
        alt="Logo"
        width="30"
        height="auto"
      />
      <p className="count-product-added">
        0
      </p>
    </button>
  );
};

export default CardWidget;
