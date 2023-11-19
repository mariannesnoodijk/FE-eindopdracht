import "./App.css";
import {Routes, Route, Navigate} from "react-router-dom";

import Home from "./pages/homePage/Home.jsx";
import PageNotFound from "./pages/pageNotFound/PageNotFound.jsx";
import Login from "./pages/loginPage/Login.jsx";
import Register from "./pages/registerPage/Register.jsx";
import Favorites from "./pages/favoritePage/Favorites.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navbar from "./components/navigation/Navbar.jsx";
import ScheduleViewing from "./pages/scheduleViewingPage/ScheduleViewing.jsx";
import PostProperty from "./pages/postPropertyPage/PostProperty.jsx";
import Properties from "./pages/propertyPage/Properties.jsx";
import Profile from "./pages/profilePage/Profile.jsx";
import PropertyMatching from "./pages/propertyMatchingPage/PropertyMatching.jsx";
import PropertyInfoPage from "./pages/propertyPage/PropertyDetail.jsx";
import {useContext} from "react";
import {AuthContext} from "./context/AuthContext.jsx";
import ViewingOverview from "./pages/viewingOverviewPage/ViewingOverview.jsx";
import InMemoryOf from "./pages/hidden/inMemoryOf.jsx";



function App() {
const {isAuth} = useContext(AuthContext);

  return (
      <>
              <Navbar/>
              <Routes>
                  <Route path="/" element={<Home/>}/>
                  <Route path="/properties" element={<Properties/>}/>
                  <Route path="/addingAProperty" element={<PostProperty/>}/>
                  <Route path="/properties/:propertyId" element={<PropertyInfoPage/>}/>
                  <Route path="/matching" element={<PropertyMatching/>}/>
                  <Route path="/login" element={<Login/>}/>
                  <Route path="/register" element={<Register/>}/>
                  {/*<Route path="/profile" element={<Profile/>}/>*/}
                  <Route path="/profile" element={isAuth ? <Profile/> : <Navigate to="/"/>}/>
                  <Route path="/viewings" element={<ScheduleViewing/>}/>
                  <Route path="/viewingsoverview" element={<ViewingOverview/>}/>
                  <Route path="/favorites" element={<Favorites/>}/>
                  <Route path="/jair" element={<InMemoryOf/>}/>
                  <Route path="*" element={<PageNotFound/>}/>
              </Routes>
              <Footer/>
      </>
  );
}

export default App
