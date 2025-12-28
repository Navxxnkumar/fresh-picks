import './Login.css';
import Logo from '../../Assets/logo.png';
import Loginbg from '../../Assets/loginbg.png';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    const [login, setLogin] = useState({ usernum: "" });

    const [err, setErr] = useState({});

    const navigate = useNavigate();

    const handlechange = (e) => {
        setLogin({ ...login, [e.target.name]: e.target.value });
    };

    const validation = () => {
        const logerr = {};

        const pattern = /^[6-9]\d{9}$/;
        if (!login.usernum.trim()) {
            logerr.usernum = "Please enter your mobile number..!";
        }
        else if (!pattern.test(login.usernum)) {
            logerr.usernum = "Please enter a valid 10-digits mobile number..!";
        }
        setErr(logerr);

        return Object.keys(logerr).length === 0;
    }

    const handlesumbit = async (e) => {
        e.preventDefault();

        if (validation()) {
            console.log(login);
            alert("OTP is send your mobile number please check...!");
            setLogin({ usernum: "" });
            setErr({});

            navigate("/loginotp", { state: { mobile: login.usernum } });
        }

    }

    return (
        <section className='loginsection'>
            <div className="loginmain">
                <div className="loginpage">
                    <form onSubmit={handlesumbit} className='forms'>
                        <div className="logimg">
                            <img src={Logo} alt="logo" />
                        </div>
                        <h1>Sign-in to your account</h1>
                        <h2>Login with OTP</h2>
                        <div className="loginnum">
                            <div className="loginin">
                                <span>+91</span>
                                <input type='tel'
                                    name="usernum"
                                    placeholder='Mobile Number'
                                    value={login.usernum}
                                    onChange={handlechange} />
                            </div>
                            <p className={`error ${err.usernum ? "show" : " "}`}>{err.usernum}</p>
                        </div>

                        <button type='submit'>Login with OTP</button>

                        <div className="terms">
                            <p>By continuing, I agree to FRESPICK's <a href="#">Terms & Conditions</a> and <a href="#">Privacy notice</a></p>
                        </div>
                        <div className="logback">
                            <Link to='/'>
                                <button type='button' className='backbtn'><i class='bx  bx-arrow-left-circle'></i> &nbsp; Back</button>
                            </Link>
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
