
import React from "react";
import './../styles/App.css';
import {Routes,Route} from "react-router-dom"
import Landing_Page  from "./Landing_Page.jsx"
import NavBar from "./NavBar.jsx";
import Flight_Search from "./Flight_Search.jsx";
const App = () => {
  return (
    <div>
      <NavBar></NavBar>
         <Routes>
          <Route path="/" element={< Landing_Page/>}/>
          <Route path="/fight-search" element={< Flight_Search/>} />
         </Routes>
    </div>
  )
}
export default App
