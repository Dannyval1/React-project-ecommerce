import React from "react";
import ItemCount from "./ItemCount";

export const ItemDetail = ({ items }) => {
  let sizes = ["S", "M", "L", "XL", "XXL"];
  return (
    <>
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
            <ItemCount stock={5} initial={1} />
          </div>
        </div>
      </div>
    </>
  );
};
