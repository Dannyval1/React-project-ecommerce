import React from "react";

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemListContainer">
      <p>Esto es un {greeting}</p>
    </div>
  );
};

export default ItemListContainer;
