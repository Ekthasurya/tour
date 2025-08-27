import React from 'react'
import "./Navbar.css";

function Navbar() {
  return (
    
    <nav>
        <div className="nav-left">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1756044155/IMG_20241115_143702_336_dk6rff.jpg" alt="Triptales-logo" />
            <p>TripTales</p>
        </div>
        <div className="nav-mid">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Hotels</li>
                <li>Pricing</li>
                <li>Destination</li>
            </ul>
        </div>
        <div className="nav-right">
            <div className="login">Login</div>

        </div>
    </nav>
  )
}

export default Navbar
