import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Aboute from "./pages/Aboute";
import Product from "./pages/Product";
import Contact from "./pages/Contact";
import Login1 from "./pages/Login1";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Buy from "./pages/Buy";

function App(props) {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/home" element={<Home />} />
          <Route path="/aboute" element={<Aboute />} />
          <Route path="/product" element={<Product />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login1 />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order/:productId/:amount" element={<Buy />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
