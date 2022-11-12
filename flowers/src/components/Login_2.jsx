import React, {useState} from 'react';
import image from "../static/images/contact-img.svg";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router-dom";
import axios from "axios";

function Login2(props) {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)
    const navigate = useNavigate()

    const singin = event => {
        event.preventDefault()
        axios.post('http://localhost:1337/api/auth/local/', {
            identifier: username, password
        })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data.user))
                localStorage.setItem('token', JSON.stringify(res.data.jwt))
                navigate('/')
                setError(false)
            })
            .catch(err => setError(true))
    }

    return (
        <div>
            <br/><br/><br/><br/>
             <section className="contact" id="contact">

                <h1 className="heading"><span> Login </span> us </h1>

                <div className="row">
                    <br/><br/>
                    <form className='login-1' onSubmit={e => singin(e)}>
                         <input
                             className="box"
                             type="text"
                             placeholder='Username'
                             onInput={e => setUsername(e.target.value)}
                             value={username}
                         />
                        <br/><br/>
                        <input
                            className="box"
                            type="Password"
                            placeholder='Enter password'
                            onInput={e => setPassword(e.target.value)}
                            value={password}
                        />
                        <br/><br/>
                        <button className='btn'>submit</button>
                        {error && <div className='error-login'>
                            <p><b>UserName</b> or <b>Password</b> is worng! </p>
                            <button
                                className='delete'
                                onClick={() => setError(false)}>
                            </button>
                        </div>}
                        <br/><br/>

                                <Link to={'/Contact'}>
                                    <p className='login'>Move to <b>contact</b> pages</p>
                                </Link>

                    </form>
                </div>
                
            </section>
        </div>
    );
}

export default Login2;