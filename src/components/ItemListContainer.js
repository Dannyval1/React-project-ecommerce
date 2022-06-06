import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import shirts from "./../mocks/shirts";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

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
    promesa(2000, id == undefined ? shirts : shirts.filter(item => item.categoryId === parseInt(id)))
      .then((datos) => { setDatos(datos) })
      .catch((err) => console.log(err));
  }, [id]);

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
