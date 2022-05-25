import React from "react";
import ItemCount from './ItemCount';


export const Item = ({id, title, price, pictureUrl}) => {

  return (
    <div className="single-item">
        <div className="card">
            <img src={pictureUrl} className="card-img-top" alt={title} />
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p>{price}</p>
                <ItemCount stock={5} initial={1} />
            </div>
        </div>
    </div>
  );
};

export default Item;
