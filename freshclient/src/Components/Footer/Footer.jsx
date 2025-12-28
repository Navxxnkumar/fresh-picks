import React from "react";
import "./Footer.css";
import Logo from "../../Assets/logo.png";
import gp from "../../Assets/google-play.png";
import app from "../../Assets/app-store.png";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <>
            <footer>
                <section className="topfooter">
                    {/* <div className="layer">
                    </div> */}
                    <div className="social">
                        <ul>
                            <li><Link to="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg></Link></li>
                            <li><Link to="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 320 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg></Link></li>
                            <li><Link to="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"></path></svg></Link></li>
                            <li><Link to="#"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path></svg></Link></li>
                        </ul>

                    </div>
                    <div className="footerDetails">
                        <div className="content">
                            <div>
                                <img src={Logo} alt="logo" />
                            </div>
                            <p>FreshPicks is Chennai’s best food and grocery store. With over 200 handpicked
                                products in the catalogue, you will find everything you are looking for.
                            </p>
                        </div>
                        <div className="Quicklink">
                            <div>
                                <h6>Quick Links</h6>
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/about">About Us</Link></li>
                                    <li><Link to="#">Our Story</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="contact">
                            <div>
                                <h6>Contact Us</h6>
                                <ul>
                                    <li><Link to="/contact"><ion-icon name="pin-outline" className="i"></ion-icon> Fresh Picks, OMR Road, Navalur, Chennai - 600130</Link></li>
                                    <li><Link to="/contact"><ion-icon name="send-outline" className="i"></ion-icon> nav@freshpicks.com</Link></li>
                                    <li><Link to="/contact"><ion-icon name="call-outline" className="i"></ion-icon> 91+ 9095xxxx50</Link></li>

                                </ul>
                            </div>
                        </div>
                        <div className="policy">
                            <div>
                                <h6>Policies</h6>
                                <ul>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Shipping policy</Link></li>
                                    <li><Link to="#">Refund policy</Link></li>
                                    <li><Link to="#">Terms and Conditions</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="bottomfooter">
                    <div className="rights">
                        <p>© 2025 FreshPicks. All rights reserved..!</p>
                    </div>
                    <div className="apps">
                        <a href="#"><img src={gp} alt="googleplay" /></a>
                        <a href="#"><img src={app} alt="appleplay" /></a>
                    </div>
                    <div className="design">
                        <p>Designed by <i>Nav</i></p>
                    </div>
                </section>
            </footer>
        </>
    )
};
export default Footer;