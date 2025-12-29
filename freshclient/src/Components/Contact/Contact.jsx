import React from 'react'
import { useState } from 'react';
import './Contact.css';
import { Breadcums } from '../Common/Breadcums';
import axios from 'axios';

// import { Contactinfo } from './Contactinfo';


export const Contact = () => {

    const [uform, setUform] = useState({ uname: "", uemail: "", umobile: "", umobiles: "", ufeed: "" });

    const [err, setErr] = useState({});

    const handlechange = (e) => {
        setUform({ ...uform, [e.target.name]: e.target.value });
    }

    const validation = () => {
        const fixerr = {};

        if (!uform.uname.trim()) {
            fixerr.uname = "Please enter your fullname...!"
        }
        const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!pattern.test(uform.uemail)) {
            fixerr.uemail = "Please enter valid email only...!"
        }
        const mpattern = /^[6-9]\d{9}$/;
        if (!mpattern.test(uform.umobile)) {
            fixerr.umobile = "Please enter valid 10 digits number only...!"
        }
        if (!mpattern.test(uform.umobiles)) {
            fixerr.umobiles = "Please enter crt whatsapp number...!"
        }
        if (!uform.ufeed.trim()) {
            fixerr.ufeed = "Please comments your feedback...!"
        }
        setErr(fixerr);
        return Object.keys(fixerr).length === 0;
    }

    const handlesumbit = async (e) => {
        e.preventDefault();
        if (validation()) {
            console.log(uform);
            alert("Your Message send successfully...!")
            setUform({ uname: "", uemail: "", umobile: "", umobiles: "", ufeed: "" });
            setErr({});
        }
        try {
            await axios.post(process.env.REACT_APP_BACKEND_URL, uform);

        }
        catch (err) {
            if (err) throw err;
            alert("Data not send to Backend..!");
        }
    }
    // const handlesumbit = async (e) => {
    //     e.preventDefault();

    //     if (!validation()) return;

    //     try {
    //         await axios.post(
    //             process.env.REACT_APP_BACKEND_URL,
    //             uform
    //         );
    //         console.log(uform)
    //         alert("Your Message sent successfully...!");
    //         setUform({ uname: "", uemail: "", umobile: "", umobiles: "", ufeed: "" });
    //         setErr({});
    //     } catch (err) {
    //         alert("Data not sent to Backend..!");
    //     }
    // };

    return (
        <section className='contactsection'>

            <div className="breadcums">
                <Breadcums breadlink="Contact Us" breadtitle="Contact Us" />
            </div>
            <div className="mainsupport">
                <div data-aos="fade-down-right"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="freeicon">
                    <div className="free">
                        <div className="free1">
                            <div className='icon1'>
                                <i class='bx  bx-directions'></i>
                            </div>
                        </div>
                        <h5>Location</h5>
                        <p> OMR Road, Chennai</p>
                    </div>
                </div>
                <div data-aos="fade-down-right"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="freeicon">
                    <div className="free">
                        <div className="free2">
                            <div className='icon1'>
                                <i class='bx  bx-paper-plane'></i>
                            </div>
                        </div>
                        <h5>Site Email</h5>
                        <p>info@freshpicks.com</p>
                    </div>
                </div>
                <div data-aos="fade-down-left"
                    data-aos-offset="100"
                    data-aos-duration="1000"
                    data-aos-easing="ease-in-out" className="freeicon">
                    <div className="free">
                        <div className="free3">
                            <div className='icon1'>
                                <i class='bx  bx-mobile-back'></i>
                            </div>
                        </div>
                        <h5>Contact No</h5>
                        <p>+91-9095xxxx50</p>
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
            <div className="contactform">
                <div className="m-form">
                    <div className="mapform">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.9056417304655!2d80.22325137483915!3d12.84937068745489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52678b6ec7b719%3A0xc0cf6f565e5669c7!2sSLA%20Institute!5e0!3m2!1sen!2sin!4v1764349137939!5m2!1sen!2sin"
                            width="600" height="450" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
                <div className="u-form">
                    <div className="formmain">
                        <div className="userform">
                            <form onSubmit={handlesumbit}>
                                <input type="text"
                                    name='uname'
                                    value={uform.uname}
                                    onChange={handlechange}
                                    placeholder='Your Name...' />
                                <p className={`error ${err.uname ? "show" : " "}`}>{err.uname}</p>

                                <input type="email"
                                    name="uemail"
                                    value={uform.uemail}
                                    onChange={handlechange}
                                    placeholder='Your Email...' />
                                <p className={`error ${err.uemail ? "show" : " "}`}>{err.uemail}</p>

                                <input type="tel"
                                    name="umobile"
                                    value={uform.umobile}
                                    onChange={handlechange}
                                    placeholder='Your Mobile no...' />
                                <p className={`error ${err.umobile ? "show" : " "}`}>{err.umobile}</p>

                                <input type="tel"
                                    name="umobiles"
                                    value={uform.umobiles}
                                    onChange={handlechange}
                                    placeholder='Your Whatsapp no...' />
                                <p className={`error ${err.umobiles ? "show" : " "}`}>{err.umobiles}</p>

                                <textarea name="ufeed"
                                    value={uform.ufeed}
                                    onChange={handlechange}
                                    placeholder='Any think Feedback...!'></textarea>
                                <p className={`error ${err.ufeed ? "show" : " "}`}>{err.ufeed}</p>

                                <button type='submit'>Send Message</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* <Contactinfo /> */}
        </section>
    )
}
