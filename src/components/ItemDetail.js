import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";
import cargando from "./../assets/progress.gif";
import toast, { Toaster } from "react-hot-toast";

export const ItemDetail = ({ items }) => {
  const cartContext = useContext(CartContext);
  const [itemCount, setItemCount] = useState(0);

  const notify = (cantidad) => {
    toast.success(`Usted ha anexado ${cantidad} items al carrito.`)
  };

  const onAdd = (cantidad) => {
    setItemCount(cantidad);
    cartContext.addItem(items, cantidad);
    notify(cantidad);
  };

  let sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <>
      {items.id === undefined ? (
        <div className="col-md-12 loading">
          <img src={cargando} width="120" />
          <p>...Cargando...</p>
        </div>
      ) : (
        <div className="row mt-5">
          <div className="col-md-6">
            <div>
              <img
                className="img-full-detail"
                src={items.pictureUrl}
                alt={items.title}
              />
            </div>
          </div>
          <div className="col-md-6">
            <h1 className="title-product-detail">{items.title}</h1>
            <h3 className="price-product-detail">${items.price}</h3>
            <p className="info-title-product-detail">
              <b>Descripción:</b>
            </p>
            <p className="description-product-detail">{items.description}</p>
            <div>
              <p className="info-title-product-detail">
                <b>Tallas:</b>
              </p>
              <div className="d-flex justify-content-between mb-4">
                {sizes.map((size) => {
                  return (
                    <button className="m-2 tallas" key={size.index}>
                      {size}
                    </button>
                  );
                })}
              </div>
            </div>
            <p className="info-title-product-detail">
              <b>Cantidad:</b>
            </p>
            <div className="amount-products">
              {itemCount === 0 ? (
                <>
                  <ItemCount stock={5} initial={1} onAdd={onAdd} />
                </>
              ) : (
                <Link to="/cart">
                  <button className="btn btn-primary">Checkout</button>
                </Link>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};
