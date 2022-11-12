import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Review2 from "../components/Review_2";

function Review(props) {
    return (
        <div>
            <Navbar/>
            <br /><br />
            <Review2/>
            <Footer/>
        </div>
    );
}

export default Review;