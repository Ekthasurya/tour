import React from 'react';
import './HomeHotels.css';

const blogs = [
  {
    id: 1,
    image: './src/assets/5.png',
    title: 'Beautiful Marvel Lake, Let\'s travelling!',
    description: 'Marvel Lake is one of the most popular vacation destinations in the West Bengal and it\'s no wonder.',
    link: '#',
  },
  {
    id: 2,
    image: './src/assets/11.png',
    title: 'Enjoy the beauty of the Chemtaburu Pahar',
    description: 'Chemtaburu pahar is one of the most popular vacation destinations in the West Bengal and it\'s no wonder.',
    link: '#',
  },
  {
    id: 3,
    image: './src/assets/7.png',
    title: 'Enjoy the beauty of Kairabera Dam',
    description: 'Kairabera Dam is one of the most popular vacation destinations in Purulia and it\'s no wonder.',
    link: '#',
  },
  {
    id: 4,
    image: './src/assets/26.png',
    title: 'Romantic moments near Mukutmanipur Dam ',
    description: 'The Mukutmanipur is a famous landmark in Bankura, West Bengal and a popular spot for couples.',
    link: '#',
  },
];

const HomeHotels = () => {
  return (
    <section className="our-blogs-section">
      <div className="section-header">
        <p className="section-subtitle">Blog</p>
        <h2 className="section-title">Our Blogs</h2>
        <p className="section-description">
          Travel is the movement of people between distant geographical locations. Travel can be done by foot, bicycle, automobile, train, boat, bus, airplane.
        </p>
      </div>
      <div className="blogs-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <div className="blog-image-container">
              <img src={blog.image} alt={blog.title} className="blog-image" />
            </div>
            <div className="blog-content">
              <h3 className="blog-title">{blog.title}</h3>
              <p className="blog-description">{blog.description}</p>
              <a href={blog.link} className="read-more-link">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HomeHotels;