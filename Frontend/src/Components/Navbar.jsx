import React from 'react'
import '../Css/Navbar.css'

const Navbar = () => {
  return (
    <div id='main-nav'>
        <div id='logo'>
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1756044155/IMG_20241115_143702_336_dk6rff.jpg" alt="" />
        </div>
        <div id='para-div'>
            <p>HOME</p>
            <p>ABOUT</p>
            <p>HOTELS</p>
            <p>OUR PAKEAGE</p>
            <p>DESTINATIONS</p>
        </div>
    </div>
  )
}

export default Navbar