import React from 'react';
import { Link } from 'react-router-dom';
import './pages.css';

const Blog = () => {
  return (
    <div className="blog">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image">
          <div className="hero-text">
            <h1>Blog</h1>
            <p>Discover stories, tips, and insights from our adventures.</p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="blog-posts-section">
        <h2>Latest Posts</h2>
        <div className="blog-grid">
          {/* Blog Post 1 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="Hells Gate National Park" />
            <h3>Exploring Hells Gate National Park</h3>
            <p>
              Discover the breathtaking landscapes and thrilling activities at Hells Gate National Park.
            </p>
            <Link to="/blog/hells-gate" className="read-more-button">Read More</Link>
          </div>

          {/* Blog Post 2 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="Mount Longonot" />
            <h3>Hiking Mount Longonot</h3>
            <p>
              Join us on an adventurous hike up Mount Longonot and enjoy stunning views of the Great Rift Valley.
            </p>
            <Link to="/blog/mount-longonot" className="read-more-button">Read More</Link>
          </div>

          {/* Blog Post 3 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="Lake Magadi" />
            <h3>Visiting Lake Magadi</h3>
            <p>
              Explore the unique beauty of Lake Magadi, known for its flamingos and hot springs.
            </p>
            <Link to="/blog/lake-magadi" className="read-more-button">Read More</Link>
          </div>

          {/* Blog Post 4 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="White-Water Rafting" />
            <h3>White-Water Rafting in Sagana</h3>
            <p>
              Experience the thrill of white-water rafting in Sagana, one of Kenya’s top adventure spots.
            </p>
            <Link to="/blog/white-water-rafting" className="read-more-button">Read More</Link>
          </div>

          {/* Blog Post 5 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="Skydiving in Diani" />
            <h3>Skydiving in Diani</h3>
            <p>
              Take the leap and experience the adrenaline rush of skydiving over the beautiful Diani Beach.
            </p>
            <Link to="/blog/skydiving-diani" className="read-more-button">Read More</Link>
          </div>

          {/* Blog Post 6 */}
          <div className="blog-post">
            <img src="https://via.placeholder.com/300x200" alt="Mount Suswa" />
            <h3>Exploring Mount Suswa</h3>
            <p>
              Discover the hidden caves and stunning landscapes of Mount Suswa.
            </p>
            <Link to="/blog/mount-suswa" className="read-more-button">Read More</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;