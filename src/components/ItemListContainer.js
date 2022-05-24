import React from "react";
import ItemCount from './ItemCount';

export const ItemListContainer = ({greeting}) => {
  return (
    <div className="ItemListContainer">
      <p>Esto es un {greeting}</p>
      <ItemCount stock={5} initial={1}/>
    </div>
  );
};

export default ItemListContainer;
