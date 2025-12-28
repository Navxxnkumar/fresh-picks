import React from 'react';
import Frestfruit from '../../Assets/Fresh Fruits.jpg';
import Frestvegi from '../../Assets/Fresh Vegitables.jpg';
import Dryfru from '../../Assets/Dry Fruits.jpg';
import Chocolate from '../../Assets/Chocolates.jpg';
import Cookies from '../../Assets/Cookies.jpg';
import Drinks from '../../Assets/Drinks & Juices.jpg';
import Bread from '../../Assets/Bread & Eggs.jpg';
import Breakfast from '../../Assets/Breakfast Mixer.jpg';
import Snacks from '../../Assets/Snacks & Chips.jpg';
import Atta from '../../Assets/Attas.jpg';
import Oil from '../../Assets/Oils & Ghee.jpg';
import Rice from '../../Assets/Rices & Dals.jpg';
import Spices from '../../Assets/Spices.jpg';
import Sugar from '../../Assets/Sugar & Salt.jpg';
import Tea from '../../Assets/Tea & Cofee.jpg';
import Cook from '../../Assets/Ready to cook.jpg';
import Ice from '../../Assets/Ice creams.jpeg';
import Gift from '../../Assets/Gift Zone.jpg';

export const Homeproduct = () => {
    return (
        <section className='productsection'>
            <div data-aos="fade-right"
                data-aos-offset="300"
                data-aos-duration="800" className="producthead">
                <div className="p-head">
                    <h4>Featured Products</h4>
                    <h1>Explore Categories</h1>
                </div>
            </div>
            <div className="productcart">
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Frestfruit} alt="product Img" />
                            </figure>
                            <p>Fresh Fruits</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Frestvegi} alt="product Img" />
                            </figure>
                            <p>Fresh Vegitables</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Dryfru} alt="product Img" />
                            </figure>
                            <p>Dry Fruits</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Chocolate} alt="product Img" />
                            </figure>
                            <p>Chocolates & Sweets</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Cookies} alt="product Img" />
                            </figure>
                            <p>Cookies & Biscuits</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Drinks} alt="product Img" />
                            </figure>
                            <p>Drinks & Jucies</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Bread} alt="product Img" />
                            </figure>
                            <p>Bread & Eggs</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Breakfast} alt="product Img" />
                            </figure>
                            <p>Breakfast Spread</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Snacks} alt="product Img" />
                            </figure>
                            <p>Snacks Items</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Atta} alt="product Img" />
                            </figure>
                            <p>Atta & flour</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Oil} alt="product Img" />
                            </figure>
                            <p>oil & Ghee</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Rice} alt="product Img" />
                            </figure>
                            <p>Rice Items</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Spices} alt="product Img" />
                            </figure>
                            <p>Masalas & Spices</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Sugar} alt="product Img" />
                            </figure>
                            <p>Sugar & Salt</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Tea} alt="product Img" />
                            </figure>
                            <p>Tea & Coffee</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Cook} alt="product Img" />
                            </figure>
                            <p>Ready to Cook</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Ice} alt="product Img" />
                            </figure>
                            <p>Ice Creams</p>
                        </div>
                    </a>
                </div>
                <div className="p-carts">
                    <a href="#">
                        <div className="cartdetails">
                            <figure>
                                <img src={Gift} alt="product Img" />
                            </figure>
                            <p>Gift zone</p>
                        </div>
                    </a>
                </div>
            </div>
        </section>
    )
}
