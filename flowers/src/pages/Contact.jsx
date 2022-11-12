import React from 'react';
import Contact2 from "../components/Contact_2";
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

function Contact(props) {
    return (
        <div>
            <Navbar/><br /><br /><br /><br />
            <Contact2/>
            <Footer/>
        </div>
    );
}

export default Contact;