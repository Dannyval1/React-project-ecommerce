import React, { useState, useEffect } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import shirts from "./../mocks/shirts";

export const ItemListContainer = ({ greeting }) => {
  const [datos, setDatos] = useState([]);

  let funcionPromise = (array) => {
    return array;
  };

  let promesa = (time, task) => {
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
    promesa(2000, funcionPromise(shirts))
      .then((datos) => {
        setDatos(datos);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="ItemListContainer">
          <ItemList items={datos} />
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
