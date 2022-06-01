import React from "react";
import { NavLink } from "react-router-dom";
import ItemCount from "./ItemCount";

export const Item = ({ id, title, price, pictureUrl }) => {
  return (
    <div className="single-item col-md-4 p-2">
      <div className="card">
        <NavLink to={`/item/${id}`}>
          <img src={pictureUrl} className="card-img-top" alt={title} />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="price-card">${price}</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
};

export default Item;
