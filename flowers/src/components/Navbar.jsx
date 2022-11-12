import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import {FiLogOut} from 'react-icons/fi'

function Navbar() {
    let navigate = useNavigate()

    const logOut = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        navigate('/Login')
    }

    return (

        <div className='header'>

            <Link to={'/'} href="#" className="logo">flower<span>.</span></Link>

            <nav className="navbar">
                <Link to={'/Home'}>
                    <a href="#">Home </a>
                </Link>
                 <Link  to={`/Aboute`}>
                     <a href="#"> Aboute</a>
                 </Link>
                <Link  to={`/Product`}>
                     <a href="#"> product</a>
                 </Link>

            </nav>

            <div className="icons">
                {/*<a href="#" className="fas fa-heart"></a>*/}
                <Link to={'/cart'}>
                    <a href="#" className="fas fa-shopping-cart"></a>
                </Link>
                <Link to={'/Login'}>
                    <a href="#" className="fas fa-user"></a>
                </Link>
                <a onClick={logOut} >
                    <FiLogOut/>
                </a>
            </div>

        </div>

    );
}

export default Navbar;