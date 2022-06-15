import React, { useState, useEffect } from "react";
import {ItemDetail} from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "./FirebaseConfig";


export const ItemDetailContainer = () => {
  const [datos, setDatos] = useState({});
  const { id } = useParams();

  useEffect(() => {
    onSnapshot(doc(db, "products", id), (doc) => {
      const itemData = {id: doc.id, ...doc.data()};
      setDatos(itemData);
    });
  }, [id])

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
