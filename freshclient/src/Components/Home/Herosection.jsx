import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

import Banner1 from '../../Assets/Banner1.png';
import Banner2 from '../../Assets/bg_1.jpg';
import Banner3 from '../../Assets/bg_2.jpg';

import "./Home.css";

const Herosection = () => {
    const image = [Banner1, Banner2, Banner3];

    return (
        <section className="Homesection">
            <div className="h-layer"></div>
            <div className="homecontent">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        480: { slidesPerView: 3 },
                        600: { slidesPerView: 2 },
                        1024: { slidesPerView: 1 }
                    }}
                    className="myswiper"
                >
                    {image.map((src, index) => (
                        <SwiperSlide key={index} className="img-content">
                            <img src={src} alt="banner" className="banner-img" />
                            <div className="img-cont">
                                <div data-aos="zoom-in-up"
                                    data-aos-offset="100"
                                    data-aos-duration="1000"
                                    data-aos-easing="ease-in-out">
                                    <h1>We serve Fresh Vegitables & Fruits</h1>
                                    <p>We Deliver Organic veg & fruits</p>
                                    <button>View Details</button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default Herosection;
