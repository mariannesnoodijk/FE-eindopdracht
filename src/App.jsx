import './App.css';
import {Routes, Route} from "react-router-dom";

import Homepage from "./pages/home/Homepage.jsx";
import PageNotFound from "./pages/error/PageNotFound.jsx";
import AboutPage from "./pages/about/AboutPage.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Login from "./pages/login/LoginPage.jsx";
import Register from "./pages/register/RegisterPage.jsx";
import Favorites from "./pages/favorites/Favorites.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navigation/Navbar.jsx";
import Appointments from "./pages/appointments/Appointments.jsx";
import AddingOfProperty from "./pages/admin/AddingOfProperty.jsx";
import Properties from "./pages/properties/Properties.jsx";
import AccountOverview from "./pages/account user overview/AccountOverview.jsx";
import ListingMatching from "./pages/matching/ListingMatching.jsx";
import PropertyInfoPage from "./pages/properties/PropertyInfoPage.jsx";



function App() {


  return (
      <>
          <header>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Homepage/>}/>
                  <Route path="/about" element={<AboutPage/>}/>
                  <Route path="/properties" element={<Properties/>}/>
                  {/*TODO: PAS ONDERSTAANDE LINK CORRECT AAN AFHANKELIJK VAN JUISTE ENDPOINT*/}
                  <Route path="/properties1" element={<AddingOfProperty/>}/>
                  <Route path="/properties/:propertyId" element={<PropertyInfoPage/>}/>
                  <Route path="/matching" element={<ListingMatching/>}/>
                  <Route path="/contact" element={<Contact/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/accounts" element={<Register/>}/>
                  <Route path="/accounts/:accountId" element={<AccountOverview/>}/>
                  <Route path="/viewings" element={<Appointments/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
              </Routes>
              <Footer/>
          </header>
      </>
  )
}

export default App
