import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import { PRODUCT } from "../utils/urls";
import Navbar from "../components/Navbar";
import { addProduct } from "../utils/addproduct";
import Footer from "../components/Footer";

export default function ProductDetail() {
  
  let [count, setCount] = useState(1);
  let [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  let params = useParams();
  let [product, setProduct] = useState({});
  const image =
    product.attributes &&
    (product.attributes.image.data
      ? product.attributes.image.data.attributes.url
      : null);

  const title =
    product.attributes &&
    (product.attributes ? product.attributes.title : "none");
  const price =
    product.attributes &&
    (product.attributes ? product.attributes.Price : "none");

  useEffect(() => {
    axios
      .get(PRODUCT.replace("id", params.id))
      .then((res) => setProduct(res.data.data))
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
      localStorage.setItem('cart', JSON.stringify(cart))
  },[cart])

  return (
    <div>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <section className="products" id="products">
        <div className="box-container">
          <div className="box">
            <span className="discount">-10%</span>
            <div className="image">
              {image ? (
                <img
                  src={`http://localhost:1337${image}`}
                  alt="404 note found"
                />
              ) : (
                <img src="" alt="note found" />
              )}
              <div className="icons">
                <a href="#" className="fas fa-heart"></a>
                  <a
                    href="#"
                    onClick={() => addProduct(cart, setCart, product, count)}
                    className="cart-btn"
                  >
                    add to cart
                  </a>
                <Link to={"/product"}>
                  <a href="#" className="fas fa-share"></a>
                </Link>
              </div>
              <div className="content">
                <h3>{title}</h3>
                <div className="price">
                  {price}
                  {} 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <br />
      <Footer />
    </div>
  );
}

// {image ? (
//     <img
//      src={`http://localhost:1337${image}`}
//      alt="404 not found"/>
// ):(
//     <img src="" alt="note found"/>
// )}
