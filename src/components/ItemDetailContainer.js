import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail";
import shirts from "./../mocks/shirts";

export const ItemDetailContainer = ({ greeting }) => {
  const [datos, setDatos] = useState([]);

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
    promise(2000, bringPromise(shirts))
      .then((datos) => {
        setDatos(datos[3]);
      })
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
