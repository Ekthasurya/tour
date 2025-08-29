import React from 'react'
import "./HomeAboutUs.css"

function HomeAboutUs() {

  return (
    <div className='wrapper'>
      <div className="left">
        <div className="img-box-wrapper">
            <div className="img-box img1"></div>
            <div className="img-box img2"></div>
        </div>
      </div>
      <div className="right">
        <div className="right-box-wrapper">
            <h5>ABOUT US</h5>
            <h2>investigate all corners of the world with us </h2>
            <p>We believe travel is more than seeing new places—it’s about connecting with people, cultures, and stories. Let us guide you across continents and moments that shape a deeper understanding of the world.</p>
            <button className="explore-now-button">Explore Now</button>
        </div>
      </div>
    </div>
    
    
  )
}

export default HomeAboutUs
