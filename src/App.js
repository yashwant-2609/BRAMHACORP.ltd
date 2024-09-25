import React from "react";
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom";
import Home from "./Components/Home/Home.js";
import  Navbar  from "./Components/Navbar/Navbar.js";
import 'bootstrap/dist/css/bootstrap.min.css';
import HuesOfSky from "./Components/SubComponents/HuesOfSky/HuesOfSky.js";
import './App.css'



const App = () => {
  return(
    <>
      
    { <Router>
      <Navbar />  
      {/* <Carousel /> */}
      <HuesOfSky />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/huesofsky" Component={HuesOfSky} />
      </Routes>
     
    </Router> }
    </>
  )
}
export default App;