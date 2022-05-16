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
    </button>
  );
};

export default CardWidget;
