import React, { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import cargando from "./../assets/progress.gif";
import { db } from "./FirebaseConfig";
import { query, where, collection, getDocs, doc, getDoc  } from "@firebase/firestore";

export const ItemListContainer = () => {
  const [datos, setDatos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const getShirts = async(db) =>  {
      let shirtsCol;
      if (!id) {
        shirtsCol = collection(db, "products");
      } else {
        shirtsCol = query(
          collection(db, "products"),
          where("categoryId", "==", Number(id))
        );
      }
      const shirtSnapshot = await getDocs(shirtsCol);
      const shirtList = shirtSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return shirtList;
    }
    getShirts(db)
      .then((shirts) => setDatos(shirts))
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
