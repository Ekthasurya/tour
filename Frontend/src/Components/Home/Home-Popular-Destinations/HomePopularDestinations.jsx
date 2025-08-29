import React, { useState, useEffect, useRef, useCallback } from 'react';
import './HomePopularDestinations.css';

// Destination data
const destinations = [
  {
    id: 1,
    name: 'Mukhosh Gram',
    country: 'Charida, Purulia',
    rating: 4.8,
    price: '$100',
    image: '../src/assets/13.webp',
  },
  {
    id: 2,
    name: 'Upper Dam',
    country: 'Ajodhya Pahar, Purulia',
    rating: 4.5,
    price: '$120',
    image: '../src/assets/15.png',
  },
  {
    id: 3,
    name: 'Marvel Lake',
    country: 'Ajodhya Pahar, Purulia',
    rating: 4.9,
    price: '$90',
    image: '../src/assets/5.png',
  },
];

const HomePopularDestinations = () => {
  const [hoveredCard, setHoveredCard] = useState(null);
  const observer = useRef(null);

  const handleMouseEnter = (id) => {
    setHoveredCard(id);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  // const lazyLoadImages = useCallback((node) => {
  //   if (observer.current) observer.current.disconnect();

  //   const options = {
  //     root: null,
  //     rootMargin: '0px',
  //     threshold: 0.1,
  //   };

  //   observer.current = new IntersectionObserver((entries) => {
  //     entries.forEach((entry) => {
  //       if (entry.isIntersecting) {
  //         const img = entry.target;
  //         const src = img.getAttribute('data-src');
  //         if (src) {
  //           img.src = src;
  //           img.removeAttribute('data-src');
  //         }
  //         observer.current.unobserve(img);
  //       }
  //     });
  //   }, options);

  //   if (node) {
  //     const images = node.querySelectorAll('img[data-src]');
  //     images.forEach((img) => observer.current.observe(img));
  //   }
  // }, []);

  // useEffect(() => {
  //   // This effect ensures lazyLoadImages is called when the component mounts
  //   lazyLoadImages(document.querySelector('.popular-destinations-list'));
  // }, [lazyLoadImages]);


  return (
    <section className="popular-destinations-section">
      <div className="section-header">
        <p className="section-subtitle">TOP DESTINATION</p>
        <h2 className="section-title">Popular Destinations</h2>
        <p className="section-description">
          Explore our most loved travel spots—breathtaking places around the globe that continue to inspire adventure, culture, and unforgettable memories.
        </p>
      </div>
      <div className="popular-destinations-list" > {/* {dest.image} */}
        {destinations.map((dest) => (
          <div
            key={dest.id}
            className="destination-card"
            onMouseEnter={() => handleMouseEnter(dest.id)}
            onMouseLeave={handleMouseLeave}
          >
            <img
              src={dest.image} // Placeholder for lazy loading
              data-src={dest.image}
              alt={dest.name}
              className="destination-image"
            />
            <div className={`details-overlay ${hoveredCard === dest.id ? 'active' : ''}`}>
              <div className="details-content">
                <div className="card-info">
                  <h3 className="card-title">{dest.name}</h3>
                  <p className="card-country">{dest.country}</p>
                </div>
                <span className="card-price">{dest.price}</span>
              </div>
            </div>
            <div className="initial-details">
                <span className="card-rating">⭐ {dest.rating}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomePopularDestinations;