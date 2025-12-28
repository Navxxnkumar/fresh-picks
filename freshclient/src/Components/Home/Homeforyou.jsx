import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/bundle";

import almond from '../../Assets/almond.jpg';
import biscuit from '../../Assets/biscuit.jpg';
import cake from '../../Assets/cake.jpg';
import coco from '../../Assets/coco.jpg';
import dairymilk from '../../Assets/dairymilk.jpg';
import darkfantasy from '../../Assets/darkfantasy.jpg';
import janum from '../../Assets/janum.png';
import kaju from '../../Assets/kaju.jpg';
import kajucookie from '../../Assets/kajucookie.jpg';
import laddoo from '../../Assets/laddoo.jpg';
import loya from '../../Assets/loya.jpg';
import milk from '../../Assets/milk.jpg';
import oreo from '../../Assets/oreo.jpg';
import papadi from '../../Assets/papadi.jpg';

import './Home.css';

export const Homeforyou = () => {

    const slide = [
        {
            id: 1,
            img: dairymilk,
            title: "Cadbury Dairy Milk",
            rate: "100",
            offer: "50"
        },
        { id: 2, img: janum, title: "Gulab Jamun Tin", rate: "500", offer: "299" },
        { id: 3, img: almond, title: "Almond Sticks", rate: "300", offer: "129" },
        { id: 4, img: cake, title: "Cake Toast", rate: "250", offer: "149" },
        { id: 5, img: loya, title: "Royal Celebration", rate: "500", offer: "299" },
        { id: 6, img: milk, title: "Milk Cake", rate: "300", offer: "149" },
        { id: 7, img: kaju, title: "Kaju Katil", rate: "400", offer: "199" },
        { id: 8, img: kajucookie, title: "Kaju Katil Cookies", rate: "600", offer: "399" },
        { id: 9, img: biscuit, title: "Fruit Biscuit", rate: "200", offer: "99" },
        { id: 10, img: laddoo, title: "Motichur Laddoo", rate: "400", offer: "199" },
        { id: 11, img: coco, title: "Coconut Cookies", rate: "300", offer: "149" },
        { id: 12, img: papadi, title: "Soan Papdi", rate: "400", offer: "199" },
        { id: 13, img: darkfantasy, title: "Sunfeast Dark Fantasy", rate: "250", offer: "129" },
        { id: 14, img: oreo, title: "Cadbury Oreo", rate: "200", offer: "99" }
    ];

    return (
        <section className='slidersection'>
            <div data-aos="zoom-in-up"
                data-aos-offset="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out" className="sliderhead">
                <div>
                    <div className="slidhead">
                        <h2>Festive Finds Just For You</h2>
                    </div>
                </div>
            </div>

            <div className="slidmain">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    loop={true}
                    navigation={true}
                    // autoplay={{
                    //     delay: 0,
                    //     disableOnInteraction: true,
                    // }}
                    modules={[Navigation, Autoplay]}
                    breakpoints={{
                        480: { slidesPerView: 2 },
                        600: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 }
                    }}

                >
                    {slide.map((item) => (
                        <SwiperSlide key={item.id} className="product-card">
                            <div className="slidmove">
                                <a href="#"><img src={item.img} alt="productimg" className='p-img' /></a>
                                <h4>{item.title}</h4>
                                <p className='p-price'>&#8377;{item.rate}</p>
                                <p className='o-price'>&#8377;{item.offer}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

        </section>
    )
}
