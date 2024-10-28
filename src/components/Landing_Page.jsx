import React from "react";
import { Link } from "react-router-dom";
import "../styles/LandingPage.css"
export default function Landing_Page() {
  return (
    <div className="landing-page">
      <h1>Welcome to Flight Booking App</h1>
      <Link to="/fight-search"><button >SEARCH FLIGHT HERE</button></Link>
    </div>
  )
}
