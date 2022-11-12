import React from 'react';
import Navbar from "./Navbar";
import Footer from "./Footer";
import image1 from '../static/images/img-1.jpg'
import {Link} from "react-router-dom";
import Product from "../pages/Product";


function Product2({ product }) {
    console.log(product)
    return (
        <div>
            <br/><br/>
            <section className="products" id="products">
                <div className="box-container">
                    <div className="box">
                        <span className="discount">-10%</span>
                        <div className="image">
                            <Link to={`/Product/${product.id}`}>
                                <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt=""/>
                            </Link>
                             <div className="icons">
                                    <a href="#" className="fas fa-heart"></a>
                                    <a href="#" className="cart-btn">add to cart</a>
                                    <a href="#" className="fas fa-share"></a>
                             </div>
                            <div className="content">
                                <h3>{product.attributes.title}</h3>
                                <div className="price"> {product.attributes.Price}  </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        
            
        </div>
    );
}

export default Product2;