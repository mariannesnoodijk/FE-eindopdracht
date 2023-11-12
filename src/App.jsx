import './App.css';
import {Routes, Route, Navigate} from "react-router-dom";

import Homepage from "./pages/home/Homepage.jsx";
import PageNotFound from "./pages/error/PageNotFound.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import Login from "./pages/login/LoginPage.jsx";
import Register from "./pages/register/RegisterPage.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navigation/Navbar.jsx";
import Viewings from "./pages/viewings/Viewings.jsx";
import AddingOfProperty from "./components/addingOfProperty/AddingOfProperty.jsx";
import Properties from "./pages/properties/Properties.jsx";
import AccountOverview from "./pages/accountOverview/AccountOverview.jsx";
import PropertyMatching from "./pages/propertyMatching/PropertyMatching.jsx";
import PropertyInfoPage from "./pages/properties/PropertyInfoPage.jsx";



function App() {


  return (
      <>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/properties" element={<Properties/>}/>
                  {/*TODO: PAS ONDERSTAANDE LINK CORRECT AAN AFHANKELIJK VAN JUISTE ENDPOINT*/}
                  <Route path="/addingOfProperty" element={<AddingOfProperty/>}/>
                  <Route path="/properties/:propertyId" element={<PropertyInfoPage/>}/>
                  <Route path="/propertyMatching" element={<PropertyMatching/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/accounts" element={<Register/>}/>
                  <Route path="/accounts/:accountId" element={<AccountOverview/>}/>
                  {/*<Route path="/accountoverview" element={isAuth ? <AccountOverview/> : <Navigate to="/"/>}/>*/}
                  <Route path="/viewings" element={<Viewings/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
              </Routes>
              <Footer/>
      </>
  )
}

export default App
