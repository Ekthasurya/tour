import React from 'react';
import './HomeSubscribeSection.css';

const HomeSubscribeSection = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here 
    console.log('Subscribe form submitted!');
  };

  return (
    <section className="subscribe-section">
      <div className="subscribe-container">
        <h2 className="subscribe-title">
          Subscribe to Get Special Price
        </h2>
        <p className="subscribe-description">
          Don't hesitate to book now and get a special price. We will make sure you get a discount
          immediately upon the first transaction.
        </p>
        <form className="subscribe-form" onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email address"
            className="email-input"
            required
          />
          <button type="submit" className="subscribe-button">Subscribe</button>
        </form>
      </div>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <img src="https://res.cloudinary.com/dhd5do52g/image/upload/v1756044155/IMG_20241115_143702_336_dk6rff.jpg" alt="TripTales" className="footer-logo" />
            <span className="brand-name">TripTales</span>
          </div>
          <nav className="footer-links">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#categories">Categories</a>
            <a href="#our-news">Our News</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="footer-socials">
            <a href="https://facebook.com" aria-label="Facebook">
              <img src="./src/assets/icons/facebook-brands-solid-full.svg" alt="Facebook" className="social-icon" />
            </a>
            <a href="https://instagram.com" aria-label="Instagram">
              <img src="./src/assets/icons/instagram-brands-solid-full.svg" alt="Instagram" className="social-icon" />
            </a>

          </div>
        </div>
        <div className="footer-copyright">
          Copyright © 2025 TripTales. All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default HomeSubscribeSection;