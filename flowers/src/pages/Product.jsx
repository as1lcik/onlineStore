import React, { useState, useEffect } from "react";
import axios from "axios";
import Product_2 from "../components/Product_2";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Product(props) {
  let [products, setProducts] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:1337/api/categories?populate=image")
      .then((res) => setProducts(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1 className="heading">
        {" "}
        latest <span>products</span>
      </h1>

      <div className="product-section">
          {products.map((product) => (
              <Product_2 product={product} key={product.id} />
          ))}
      </div>

      <Footer />
    </div>
  );
}

export default Product;
