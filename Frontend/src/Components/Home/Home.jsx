import React from 'react'
import "./Home.css"
import HomeAboutUs from './Home-About-Us/HomeAboutUs'

function Home() {
  return (
    <main>
      <div className="main-landing">

        <div className="main-landing-text">
          <div>
            Travel More, Worry Less
          </div>
          <h1>
            Wander the world, collect memories, and feel alive.
          </h1>
          <p>We offer stress-free travel planning, perfectly customized to match your personal style, interests, and budget.</p>
        </div>

        <div className="home-search-section">
          <h2>
            Find the best place
          </h2>
          
        </div>
      </div>

      <HomeAboutUs />
    </main>
  )
}

export default Home
