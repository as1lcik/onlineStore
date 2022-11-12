import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { ORDER_PRODUCTS } from "../utils/urls";
import axios from "axios";

export default function Cart() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );
  let navigate = useNavigate();

  const deleteCart = (cartItem) => {
    setCart([
      ...cart.filter((item) => item.product.id !== cartItem.product.id),
    ]);
  };

  const increase = (cartItem) => {
    setCart(
      cart.map((item) => {
        if (item.product.id === cartItem.product.id) {
          item.count += 1;
        }
        return item;
      })
    );
  };

  const decrease = (cartItem) => {
    if (cartItem.count === 1) {
      deleteCart(cartItem);
    } else {
      setCart(
        cart.map((item) => {
          if (item.product.id === cartItem.product.id) {
            item.count -= 1;
          }
          return item;
        })
      );
    }
  };



console.log(cart)
    const createOrderProduct = cartItem => {
        axios.post(ORDER_PRODUCTS, {
            data: {
                amount: cartItem.count,
                product: cartItem.product,
                total: cartItem.product.attributes.Price
            }
        })
             .then((res) => {
                 navigate(`/order/${res.data.data.id}/${cartItem.count}`);
             })
            .catch((err) => console.error(err));

        return deleteCart(cartItem)
    }
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div className="">
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <div className="section">
        <div className="container">
          {cart.length === 0 ? (
            <div>
              <h1 className="cart-title">note carts</h1>
            </div>
          ) : (
            cart.map((cartItem) => (
              <div key={cartItem.product.id} className="box">
                <div className="cart">
                  <div className="cart-img">
                    <img
                      src={`http://localhost:1337${cartItem.product.attributes.image.data.attributes.url}`}
                      alt="Placeholder image"
                    />
                  </div>
                  <div className="column is-4 is-clickable">
                    <p className="cart-name">
                      {cartItem.product.attributes.title}
                    </p>
                  </div>
                  <div className="cart_plus_min">
                    <button
                      onClick={() => decrease(cartItem)}
                      className="cart-min"
                    >
                      -
                    </button>
                    <span className="cart-num">{cartItem.count}</span>
                    <button
                      onClick={() => increase(cartItem)}
                      className="cart-plus"
                    >
                      +
                    </button>
                  </div>
                  <div className="column is-flex is-flex-direction-column is-justify-content-center">
                    <button
                      onClick={() => createOrderProduct(cartItem)}
                      className="cart-buy"
                    >
                      Buy
                    </button>
                    <br />
                    <br />
                    <button
                      onClick={() => deleteCart(cartItem)}
                      className="cart-rem"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
