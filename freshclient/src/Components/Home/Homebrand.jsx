import React from 'react';
import b2 from '../../Assets/Banner2.png';
import b3 from '../../Assets/Banner3.png';

export const Homebrand = () => {
    return (
        <section className='brandsection'>
            <div className="brandhead">
                <div data-aos="fade-left"
                    data-aos-offset="300"
                    data-aos-duration="800" className="b-head">
                    <h1>Brand Sponsor</h1>
                </div>
            </div>
            <div className="brand">
                <a href="#">
                    <img src={b2} alt="Banner" />
                </a>
            </div>
            <div className="brand1">
                <a href="#">
                    <img src={b3} alt="Banner" />
                </a>
            </div>
        </section>
    )
}
