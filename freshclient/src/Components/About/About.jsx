import React from 'react'
import './About.css';
import { Breadcums } from '../Common/Breadcums';
import Counter from '../Common/Counter';
import { Abouttest } from './Abouttest';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



export const About = ({ breadlink, breadtitle }) => {


    return (
        <section>
            <div className="breadcumd">
                <Breadcums breadlink='About us' breadtitle='About us' />
            </div>
            <div className="aboutcontent">
                <div className="aboutrow">
                    <div className="aboutimg">

                    </div>
                    <div className="aboutcont">
                        <div data-aos="zoom-in"
                            data-aos-offset="100"
                            data-aos-duration="800" className="abouthead">
                            <h2>Welcome to <em>Freshpicks</em> an E-commerce website</h2>
                        </div>
                        <div className="aboutpara">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.</p>
                            <p>But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her,
                                made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.</p>
                            <p><a href="#">Shop now</a></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="counterrow">
                <div className="c-layer"></div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    className="counterbox">
                    <Counter to={10000} speed={150} />
                    <p>Happy Customer</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="counterbox">
                    <Counter to={1000} speed={150} />
                    <p>Partners</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="counterbox">
                    <Counter to={100} speed={150} />
                    <p>Branches</p>
                </div>
                <div data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom" className="counterbox">
                    <Counter to={60} speed={150} />
                    <p>Awards</p>
                </div>
            </div>

            <div className="feedback">
                <div className="feedbackmain">
                    <div data-aos="fade-zoom-in"
                        data-aos-easing="ease-in-back"
                        data-aos-delay="300"
                        data-aos-offset="0" className="feedhead">
                        <h5>Testimony</h5>
                        <h1>Our Satisfied Customers Says</h1>
                    </div>
                    <Abouttest />
                </div>
            </div>

            <div>
                <div className="mainsupport">
                    <div data-aos="fade-down-right"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="freeicon">
                        <div className="free">
                            <div className="free1">
                                <div className='icon1'>
                                    <i class='bx  bx-truck'></i>
                                </div>
                            </div>
                            <h5>Free Shipping</h5>
                            <p>On order over 10k+</p>
                        </div>
                    </div>
                    <div data-aos="fade-down-right"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="freeicon">
                        <div className="free">
                            <div className="free2">
                                <div className='icon1'>
                                    <i class='bx  bx-cherry'></i>
                                </div>
                            </div>
                            <h5>Always Fresh</h5>
                            <p>Product well package</p>
                        </div>
                    </div>
                    <div data-aos="fade-down-left"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="freeicon">
                        <div className="free">
                            <div className="free3">
                                <div className='icon1'>
                                    <i class='bx  bx-star-circle'></i>
                                </div>
                            </div>
                            <h5>Superior Quality</h5>
                            <p>Quality Products</p>
                        </div>
                    </div>
                    <div data-aos="fade-down-left"
                        data-aos-offset="100"
                        data-aos-duration="1000"
                        data-aos-easing="ease-in-out" className="freeicon">
                        <div className="free">
                            <div className="free4">
                                <div className='icon1'>
                                    <i class='bx  bx-message-circle-heart'></i>
                                </div>
                            </div>
                            <h5>Support</h5>
                            <p>24/7 Support</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
