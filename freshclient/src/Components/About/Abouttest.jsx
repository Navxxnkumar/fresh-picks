import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Customer from '../../Assets/customer.jpg';
import './About.css';

export const Abouttest = () => {

    const custom = [
        {
            imgs: Customer,
            name: "Thara",
            role: "Web Developer",
            feed: "Fresh Picks is Chennai’s best food and grocery store. With over 200 handpicked products in the catalogue, you will find everything you are looking for."
        },
        {
            imgs: Customer,
            name: "Thara",
            role: "Web Developer",
            feed: "Fresh Picks is Chennai’s best food and grocery store. With over 200 handpicked products in the catalogue, you will find everything you are looking for."
        },
        {
            imgs: Customer,
            name: "Thara",
            role: "Web Developer",
            feed: "Fresh Picks is Chennai’s best food and grocery store. With over 200 handpicked products in the catalogue, you will find everything you are looking for."
        }
        , {
            imgs: Customer,
            name: "Thara",
            role: "Web Developer",
            feed: "Fresh Picks is Chennai’s best food and grocery store. With over 200 handpicked products in the catalogue, you will find everything you are looking for."
        },
        {
            imgs: Customer,
            name: "Thara",
            role: "Web Developer",
            feed: "Fresh Picks is Chennai’s best food and grocery store. With over 200 handpicked products in the catalogue, you will find everything you are looking for."
        }
    ];

    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: "40px",
        arrows: true,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,

        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerPadding: "40px",
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                    arrows: false,
                },
            },
        ],
    };


    return (
        <section>
            <div className="feedslide">
                <div className="feedmove">
                    <Slider {...settings}>
                        {
                            custom.map((us, idx) => (
                                <div className='feedmain' key={idx}>
                                    <div className='feedimg'>
                                        <img src={us.imgs} alt="image" />
                                    </div>
                                    <div className='feedcont'>
                                        <h4>{us.name}</h4>
                                        <p>{us.role}</p>
                                        <p>{us.feed}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </Slider>

                </div>
            </div>
        </section>
    )
}
