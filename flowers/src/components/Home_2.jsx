import React from 'react';
import { Link } from 'react-router-dom';

function Home2() {
    return (
        <section className="home" id="home">

            <div className="content">
                <h3>fresh flowers</h3>
                <span> natural & beautiful flowers </span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae laborum ut minus corrupti dolorum
                    dolore assumenda iste voluptate dolorem pariatur.</p>
                <Link to={'/product'}>
                <a href="#" className="btn">shop now</a>
                </Link>
            </div>

        </section>
    );
}

export default Home2;