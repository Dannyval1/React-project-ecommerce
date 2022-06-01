import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail";
import shirts from "./../mocks/shirts";
import { useParams } from "react-router-dom";

export const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const { id } = useParams();

  let bringPromise = (array) => {
    return array;
  };

  let promise = (time, task) => {
    return new Promise((resolve, reject) => {
      if (true) {
        setTimeout(() => {
          resolve(task);
        }, time);
      } else {
        reject("Error");
      }
    });
  };

  useEffect(() => {
    promise(2000, shirts.find(item => item.id === parseInt(id)))
      .then((result) => { setDatos(result)})
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="ItemListContainer">
          <ItemDetail items={datos} />
        </div>
      </div>
    </div>
  );
};

export default ItemDetailContainer;
