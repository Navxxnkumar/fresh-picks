import React from "react";
import { useState } from "react";
import "./Header.css";
import Logo from "../../Assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {

    const [issearch, setIssearch] = useState(false);

    const [ismenu, setIsmenu] = useState(false);

    const togglemenu = () => {
        setIsmenu(!ismenu);
    }

    const toggleSearch = () => {
        setIssearch(!issearch);
    }
    return (
        <>
            <header>
                <div className="topnav">
                    <div className="marquee">
                        <p><i class='bxr  bx-quote-right'    ></i>  Right from Fresh picks on Fruits & Vegetables, Spices & Sweets to Packaged products & Snacks & Chocolates  <i class='bxr  bx-quote-right'    ></i>  – We have it all !</p>
                    </div>
                </div>
                <div className="sticky">
                    <div className="secnav">
                        <div className="logo">
                            <Link to="/"><img src={Logo} alt="logo" /></Link>
                            <div className="mobiletoggle" onClick={togglemenu}>
                                <i className={ismenu ? 'bx bx-x' : 'bxr  bx-menu-left'}    ></i>
                            </div>
                        </div>
                        <div className="location">
                            <div className="locaname">
                                <i class='bxr  bx-street-view'    ></i>
                                <Link to="#">Choose your location</Link>
                            </div>
                        </div>
                        {issearch && <div className="overlay"></div>}
                        <div className={`search ${issearch ? "open" : ""}`}>
                            <div className="searchi" onClick={toggleSearch}>
                                <i className={issearch ? "bx bx-x" : "bxr  bx-search"} ></i>
                            </div>
                            <input type="text" placeholder="What are you looking for today?" />
                            <button type="submit">Search</button>
                        </div>
                        <div className="mobiletoggle1" onClick={toggleSearch}>
                            <i className={issearch ? "bx bx-x" : "bxr bx-search"}    ></i>
                        </div>
                        <div className="login">
                            <div className="log">
                                <i class='bxr  bx-user'    ></i>
                                <Link to="/loginpage">Login</Link>
                            </div>
                        </div>
                        <div className="cart">
                            <div className="count">
                                <Link to="#"> <i class='bxr  bx-groceries'    ></i></Link>
                                <div>
                                    <span>0</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="layer1"></div>

                    {ismenu && <div className="overlay1"></div>}
                    <div className="lastnav">
                        <div className={`menubar ${ismenu ? 'open' : ''}`}>
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li className="supermenu"><Link to="#">Shop<i class='bxr  bx-caret-down'    ></i> </Link>
                                    <ul className="submenu">
                                        <li><Link to="#">Shop</Link></li>
                                        <li><Link to="#">Whislist</Link></li>
                                        <li><Link to="#">Single Product</Link></li>
                                        <li><Link to="#">Checkout</Link></li>
                                    </ul>
                                </li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
};
export default Header;