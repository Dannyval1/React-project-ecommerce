import NavBar from "./../components/NavBar";
import ItemListContainer from "./../components/ItemListContainer";
import ItemDetailContainer from "./../components/ItemDetailContainer";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../components/Cart";

export default function RoutesApp() {
  return (
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/category/:id" element={<ItemListContainer />} />
          <Route path="/item/:id" element={<ItemDetailContainer />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>
  );
}
