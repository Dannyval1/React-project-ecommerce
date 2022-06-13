import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import shirts from "./../mocks/shirts";
import { useParams } from "react-router-dom";
import cargando from "./../assets/progress.gif";


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
    promesa(
      2000,
      id == undefined
        ? shirts
        : shirts.filter((item) => item.categoryId === parseInt(id))
    )
      .then((datos) => {
        setDatos(datos);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <div className="ItemListContainer">
          {datos.length > 0 ? (
            <ItemList items={datos} />
          ) : (
            <div className="col-md-12 loading">
              <img src={cargando} width="120" />
              <p>...Cargando...</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
