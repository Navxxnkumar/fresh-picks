import './App.css';
import { useLocation } from 'react-router-dom';
import { About } from './Components/About/About';
import { Contact } from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import { Routes, Route } from 'react-router-dom';
import { Login } from './Components/Login/Login';
import { Loginotp } from './Components/Login/Loginotp';

function App() {

  const location = useLocation();

  const hidehf = location.pathname === "/loginpage" || location.pathname === "/loginotp";

  return (
    <>
      {!hidehf && <Header />}
      <Routes>
        <Route path='/' element={<Home />}>
        </Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}>
        </Route>
        <Route path='/loginpage' element={<Login />}></Route>
        <Route path='/loginotp' element={<Loginotp />}></Route>
      </Routes>
      {!hidehf && <Footer />}
    </>
  );
}

export default App;
