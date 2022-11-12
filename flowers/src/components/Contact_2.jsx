import React  from 'react';
import image from '../static/images/contact-img.svg'
import {useNavigate} from "react-router-dom"
import {useState} from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Contact2() {

    let [username, setUsername] = useState('')
    let [email, setEmail] = useState('')
    let [password, setPassword] = useState('')
    let [password2, setPassword2] = useState('')


    const navigate = useNavigate()

     const register = event => {
        event.preventDefault()
         console.log(username)
         console.log(email)
         console.log(password)
        if(password === password2){
            axios.post('http://localhost:1337/api/users',{
                    username:username,
                email:email,
                password:password, confirmed:true
            })
                .then(res => navigate('/Login'))
                .catch(err => console.error(err))
        }else {
            alert('password err')
        }
    }

    return (
        <div>
            <section className="contact" id="contact">

                <h1 className="heading"><span> contact </span> us </h1>

                <div className="row">

                    <form onSubmit={e => register(e)}>
                         <input
                             className="box"
                             type="text"
                             placeholder='Username'
                             onInput={e => setUsername(e.target.value)}
                             value={username}
                         />
                        <input
                            className="box"
                            type="email"
                            placeholder='Enter Email'
                            onInput={e => setEmail(e.target.value)}
                            value={email}
                        />

                        <input
                            className="box"
                            type="password"
                            placeholder='Enter password'
                            onInput={e => setPassword(e.target.value)}
                            value={password}
                        />

                        <input
                            className="box"
                            type="password"
                            placeholder='Enter passwod2'
                            onInput={e => setPassword2(e.target.value)}
                            value={password2}
                        />
                            <button className='btn'>Submit</button>
                    </form>

                    <div className="image">
                        <img src={image} alt=""/>
                    </div>

                </div>

            </section>
        </div>
    );
}

export default Contact2;