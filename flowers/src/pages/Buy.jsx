import React from "react";
import { ORDERS, ORDER_PRODUCT } from "../utils/urls";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Buy() {
    let [orderProduct, setOrderProduct] = useState({})
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    const [name, setName] = useState()
    const [customer] = useState(JSON.parse(localStorage.getItem('user')) || [])
    const params = useParams()
    const navigate = useNavigate()


    useEffect(() => {
        axios.get(ORDER_PRODUCT.replace('id', params.productId))
        .then(res => setOrderProduct(res.data.data))
        .catch(err => console.error(err))
    }, [])

    const deleteOrderProduct = () => {
        axios.delete(ORDER_PRODUCT.replace('id', params.productId))
        .then(() => navigate(`/product/${orderProduct.attributes.product.data.id}`))
        .catch(err => console.error(err))
    }

    const createOrder = (event) => {
        event.preventDefault()

        if (name && address && phone) {
            axios.post(ORDERS, {
                data: {
                    customer, address, phone,
                    total: orderProduct.attributes.total, 
                    order_products: orderProduct.id
                }
            }).then(res => {
                console.log(res.data.data)
                navigate('/orders')
            }).catch(err => console.error(err))
        } else {
            alert('write something')
        }
    }

    const amout = orderProduct.attributes && (orderProduct.attributes ? orderProduct.attributes.amount : 'none' )
    const total = orderProduct.attributes && (orderProduct.attributes ? orderProduct.attributes.total : 'none' )
    const productName = orderProduct.attributes && (orderProduct.attributes ? orderProduct.attributes.product.data.attributes.title : 'none' )

   return (
       <div className="buy-section">
           <Navbar/>
           <br/><br/><br/><br/><br/><br/><br/>
            <div className="heading  ">
                Shopping Information
            </div>
           <div className="buy-container">
               <div className="buy-left">
                   <div className="buy-left-box">
                       <form className="form" onSubmit={(event) => createOrder(event)}>
                           <div className="field">
                               <input
                                   type="text"
                                   id='name'
                                   placeholder='Write your name'
                                   onInput={(e) => setName(e.target.value)}
                                   value={name}
                                   className='buy-input'/>
                           </div>
                           <div className="field">
                               <input
                                   type="text"
                                   id='address'
                                   placeholder='Write your address'
                                   onInput={(e) => setAddress(e.target.value)}
                                   value={address}
                                   className='buy-input'/>
                           </div>
                           <div className="field">
                               <input
                                   type="tel"
                                   id='phone'
                                   onInput={(e) => setPhone(e.target.value)}
                                   value={phone}
                                   placeholder='Write your phone'
                                   className='buy-input'/>
                           </div>
                           <br/>
                           <button className='btn buy-btn' type='submit'>Submit</button>
                       </form>
                   </div>
               </div>
               <div className="buy-right">
                   <div className="buy-right-box">
                       <div className="buy-right-container">
                           <div className="buy-right-text">
                               <p className="buy-right-title">Product: {productName}</p>

                               <p className="buy-right-amount">Amount: x{amout}</p>

                               <p className="buy-right-total">Total: {total} sum</p>
                               <button
                                   onClick={deleteOrderProduct}
                                    className="btn buy-right-btn"
                                >back to product</button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

           <Footer/>
       </div>
   )
}