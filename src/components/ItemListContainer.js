import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import cargando from "./../assets/progress.gif";
import { db } from "./FirebaseConfig";
import { collection, getDocs } from 'firebase/firestore/lite';


export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    async function getShirts(db) {
      const shirtsCol = collection(db, "products");
      const shirtSnapshot = await getDocs(shirtsCol);
      const shirtList = shirtSnapshot.docs.map((doc) => ({id: doc.id, ...doc.data()}));
      return shirtList;
    }
    getShirts(db)
    .then(shirts => setDatos(shirts))
    .catch(err => console.log(err));;
  }, []);

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
