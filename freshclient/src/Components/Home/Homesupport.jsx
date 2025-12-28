import React from 'react'
import './Home.css';

export const Homesupport = () => {
    return (
        <section className='supportsection'>
            <div className="mainsupport">
                <div data-aos="fade-down-right"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="freeicon">
                    <div className="free">
                        <div className="free1">
                            <div className='icon1'>
                                <i class='bxr  bx-truck'></i>
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
                                <i class='bxr  bx-cherry'></i>
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
                                <i class='bxr  bx-star-circle'></i>
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
                                <i class='bxr  bx-message-circle-heart'></i>
                            </div>
                        </div>
                        <h5>Support</h5>
                        <p>24/7 Support</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
