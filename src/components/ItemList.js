import React from "react";
import { Item } from "./Item";
import cargando from "./../assets/progress.gif";

export const ItemList = ({ items }) => {
  return (
    <div className="list-items mt-5">
      <div className="d-flex flex-wrap m-2">
        {items.length > 0 ? (
          items.map((item) => (
            <Item
              key={item.id}
              id={item.id}
              price={item.price}
              title={item.title}
              pictureUrl={item.pictureUrl}
            />
          ))
        ) : (
          <div className="col-md-12 loading">
            <img src={cargando} width="120" />
            <p>...Cargando...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemList;
