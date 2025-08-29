import React from 'react';
import './HomeBestFeatures.css';

const HomeBestFeatures = () => {
  return (
    <section className="best-features-section">
      <div className="best-features-content">
        <p className="what-we-give">WHAT WE GIVE</p>
        <h2 className="section-title">Best Features For You</h2>
        <p className="section-description">
          Travel is the movement of people between distant geographical
          locations. Travel can be done by foot, bicycle, automobile, train,
          boat, bus, airplane.
        </p>

        <div className="feature-list">
          <div className="feature-item">
            {/* <img src={tourGuideIcon} alt="Best Tour Guide" className="feature-icon" /> */}
            <div>
              <h3>Best Tour Guide</h3>
              <p>Your guide with more than 5 years experience and know about destinations in the world</p>
            </div>
          </div>
          <div className="feature-item">
            {/* <img src={reliableTourIcon} alt="Reliable Tour" className="feature-icon" /> */}
            <div>
              <h3>Reliable Tour</h3>
              <p>Our trip has been trusted by several tourists and have a good rating for sure</p>
            </div>
          </div>
          <div className="feature-item">
            {/* <img src={friendlyPriceIcon} alt="Friendly Price" className="feature-icon" /> */}
            <div>
              <h3>Friendly Price</h3>
              <p>We have a very friendly offer for you and definitely won't let you down</p>
            </div>
          </div>
        </div>

        <button className="explore-now-button">Explore Now</button>
      </div>

      <div className="best-features-images">
        <div className="image-grid">
          <div className="image-item top-left">

            <img src="../src/assets/9.png" alt="Travel scenery 1" />
          </div>
          <div className="image-item top-right">
            <img src="../src/assets/10.png" alt="Travelers with map" />
          </div>
          <div className="image-item bottom-left">
            <img src="../src/assets/25.png" alt="Travel scenery 2" />
          </div>
          <div className="image-item bottom-right">
            <img src="../src/assets/13.png" alt="Group of friends" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeBestFeatures;