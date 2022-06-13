import React, { useState } from "react";

export const ItemCount = ({ stock, initial, onAdd }) => {
  const [valueProduct, setValueProduct] = useState(0);

  const addToCart = () => {
    if (valueProduct < stock) setValueProduct(valueProduct + 1);
  };

  const lessToCart = () => {
    if (valueProduct > initial) setValueProduct(valueProduct - 1);
  };

  return (
    <div className="group-add-cart">
      <div className="controls">
        <button className="btn-minus" onClick={lessToCart}>
          -
        </button>
        <div>{valueProduct}</div>
        <button className="btn-add" onClick={addToCart}>
          +
        </button>
      </div>
      <button
        className="btn-add-to-cart"
        onClick={(() => onAdd(valueProduct))}
      >
        Agregar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
