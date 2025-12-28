import './Loginotp.css';
import Logo from '../../Assets/logo.png';
import Loginbg from '../../Assets/loginbg.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Otp } from '../Common/Otp';


export const Loginotp = () => {

    const [timer, setTimer] = useState(10);

    const [resend, setResend] = useState(false);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
        else {
            setResend(true)
        }
    }, [timer]);

    const handleResend = () => {
        if (!resend) return;

        alert("OTP send again your number plz check..!");
        setResend(false);
        setTimer(10);
    };


    const location = useLocation();
    const mobile = location.state?.mobile;


    return (
        <section className='loginsection'>
            <div className="loginmain">
                <div className="loginpage">
                    <form  className='forms1'>
                        <div className="logimg">
                            <img src={Logo} alt="logo" />
                        </div>
                        <h1>Enter the OTP we texted you.!</h1>
                        <h2>We've sent an OTP to &nbsp;&nbsp;<span>+91&nbsp;{mobile}</span><Link to='/loginpage'><i class='bx  bx-edit'></i></Link> </h2>
                        <div className="loginnum1">
                            <div className="loginin1">
                                <Otp />
                            </div>
                        </div>
                        <div className="terms1"> 
                            <p>Your 4 digit code is on its way. This can sometimes take a few moments to arrive.</p>
                        </div>
                        <button type='submit'>Verify OTP</button>
                        <div className="logback1">
                            <div className='resendbtn'>
                                <button onClick={handleResend}
                                    disabled={!resend}
                                    style={{
                                        color: resend ? "rgb(79, 173, 33)" : "#000",
                                        cursor: resend ? "pointer" : "not-allowed"
                                    }}
                                >{resend ? "Resend OTP ?" : `Resend in: ${timer}s`}</button>
                            </div>
                            <div className="contactlink">
                                <div className='c-link'>
                                    <Link><i class='bx  bx-phone'></i> Contact Support</Link>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="loginpage2">
                    <div className="loginimg">
                        <img src={Loginbg} alt="login" />
                    </div>
                </div>
            </div>
        </section>
    )
}
