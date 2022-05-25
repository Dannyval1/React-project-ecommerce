import React from "react";
import { Item } from './Item';


export const ItemList = ({items}) => {

  return (
    <div className="list-items mt-5">
        <div className='d-flex flex-wrap justify-content-evenly m-2'>
        {
          items.map(item => 
              <Item key={item.id}
              price={item.price}
              title={item.title}
              pictureUrl={item.pictureUrl} />
          )
        }
      </div>
    </div>
  );
};

export default ItemList;
