import React from "react";
import "../Css/Home.css";

const Home = () => {
  const hotels = [
  {
    id: 1,
    name: "Sunset Paradise Hotel",
    location: "Goa, India",
    price: "₹3,500/night",
    image: "https://source.unsplash.com/400x250/?hotel,resort"
  },
  {
    id: 2,
    name: "Mountain View Retreat",
    location: "Manali, India",
    price: "₹4,200/night",
    image: "https://source.unsplash.com/400x250/?mountain,hotel"
  },
  {
    id: 3,
    name: "Ocean Breeze Resort",
    location: "Kerala, India",
    price: "₹5,000/night",
    image: "https://source.unsplash.com/400x250/?beach,resort"
  }
];
  return (
    <div>
      <section className="firstSection">
        <div className="overlay"></div>
        <div className="content left-align">
          <h1>TripTales</h1>
          <p className="tagline">Discover amazing destinations with us</p>
          <p className="desc">
            Discover breathtaking destinations, curated packages, and the perfect stay for your next adventure. With TripTales, your dream vacation begins here.
          </p>

          {/* 🔍 Search Box */}
          <div className="search-box">
            <input type="text" placeholder="Search destinations, hotels..." />
            <button>Search</button>
          </div>
        </div>
      </section>

     <section className="about-section" id="about">
      <div className="about-container">
        {/* Left Side - Images */}
        <div className="about-images">
          <img src="https://www.thestatesman.com/wp-content/uploads/2017/08/1498685997-ajodhya-hills--fb.jpg" alt="TripTales travel" className="about-img img1" />
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUr3DAWyh5uecSQCxkyK8QmhTEYsFLpiJrGFY5HuoeAJPpFHlfmui7ZtD6Y2CgkrgxnF8&usqp=CAU" alt="TripTales experience" className="about-img img2" />
        </div>

        {/* Right Side - Text */}
        <div className="about-text">
          <h2>About TripTales</h2>
          <p>
            At TripTales, every journey is a story waiting to be told. 
            We bring you closer to hidden gems, unforgettable experiences, 
            and cultures that inspire. Whether it’s mountains, beaches, 
            or cities – your adventure begins here. 
          </p>
          <button className="about-btn">Read More</button>
        </div>
      </div>
    </section>

    <section className="hotel-list">
      <h2>Featured Hotels</h2>
      <div className="hotel-grid">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="hotel-card">
            <img src={hotel.image} alt={hotel.name} />
            <div className="hotel-info">
              <h3>{hotel.name}</h3>
              <p>{hotel.location}</p>
              <p className="price">{hotel.price}</p>
              <button>Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>

    </div>
  );
};

export default Home;
