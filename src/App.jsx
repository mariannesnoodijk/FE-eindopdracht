import './App.css';
import axios from 'axios'; // IMPORTEER DEZE IN HET DESBETREFFENDE BESTAND
import {Routes, Route} from "react-router-dom";
import Navigation from "./components/navigation/Navigation.jsx";
import Homepage from "./pages/home/Homepage.jsx";
import NotFound from "./pages/error/NotFound.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import ListingsOverview from "./pages/listings/ListingsOverview.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Login from "./pages/login/LoginPage.jsx";
import Register from "./pages/register/RegisterPage.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";

import headerImageAmsterdam from './assets/headerImageAmsterdam.jpg';
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navigation/Navbar.jsx";



function App() {


  return (
      <>
          <header>
          {/*<div className="page-container">*/}
          {/*    <Navigation/>*/}
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/listings" element={<ListingsOverview/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/accounts" element={<Register/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
                  <Route path="*" element={<NotFound/>}/>
              </Routes>
              <Footer/>
          {/*</div>*/}
              {/*<div className="header-image">*/}
              {/*<span>*/}
              {/*    <img src={headerImageAmsterdam} alt="amsterdam canals"/>*/}
              {/*</span>*/}
              {/*</div>*/}
          </header>
      </>
  )
}

export default App
