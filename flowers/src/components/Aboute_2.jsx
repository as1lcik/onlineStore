import React from 'react';
import video from '../static/images/about-vid.mp4'
import icon1 from  '../static/images/icon-1.png'
import icon2 from  '../static/images/icon-2.png'
import icon3 from  '../static/images/icon-3.png'
import icon4 from '../static/images/icon-4.png'

function Aboute2() {
    return (
        <div>
            <br/><br/><br/><br/> <br/>
            <section className="about" id="about">

                <h1 className="heading"><span> about </span> us </h1>

                <div className="row">

                    <div className="video-container">
                        <video src={video} loop autoPlay muted></video>
                        <h3>best flower sellers</h3>
                    </div>

                    <div className="content">
                        <h3>why choose us?</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Rem cumque sit nemo pariatur
                            corporis perspiciatis aspernatur a ullam repudiandae autem asperiores quibusdam omnis
                            commodi alias repellat illum, unde optio temporibus.</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium ea est commodi incidunt
                            magni quia molestias perspiciatis, unde repudiandae quidem.</p>
                        <a href="#" className="btn">learn more</a>
                    </div>

                </div>

            </section>
            <section className="icons-container">

                <div className="icons">
                    <img src={icon1} alt=""/>
                        <div className="info">
                            <h3>secure paymens</h3>
                            <span>protected by paypal</span>
                        </div>
                </div>

                <div className="icons">
                    <img src={icon2} alt=""/>
                    <div className="info">
                        <h3>10 days returns</h3>
                        <span>moneyback guarantee</span>
                    </div>
                </div>

                <div className="icons">
                    <img src={icon3} alt=""/>
                          <div className="info">
                              <h3>offer & gifts</h3>
                              <span>on all orders</span>
                          </div>
                </div>

                <div className="icons">
                    <img src={icon4} alt=""/>
                    <div className="info">
                        <h3>secure paymens</h3>
                        <span>protected by paypal</span>
                    </div>
                </div>


            </section>
            <br/>
        </div>
    );
}

export default Aboute2;