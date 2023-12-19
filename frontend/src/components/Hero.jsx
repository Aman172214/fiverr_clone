import React from "react";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
    <div className="hero">
      <div className="container">
        <div className="left">
          <h1>
            Find the perfect <i>freelance</i> services for your business
          </h1>
          <div className="search">
            <div className="searchInput">
              <img src="/search.png" alt="search icon" />
              <input type="text" placeholder="Try 'building mobile app'" />
            </div>
            <button>Search</button>
          </div>
          <div className="popular">
            <span>Popular:</span>
            <button>Web Design</button>
            <button>Wordpress</button>
            <button>Logo Design</button>
            <button>AI Services</button>
          </div>
        </div>
        <div className="right">
          <img src="/man.png" alt="image of a man" />
        </div>
      </div>
    </div>
    <div className="trustedBy">
    <div className="container">
      <span>Trusted by:</span>
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/facebook2x.188a797.png"
        alt=""
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google2x.06d74c8.png"
        alt=""
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix2x.887e47e.png"
        alt=""
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/pandg2x.6dc32e4.png"
        alt=""
      />
      <img
        src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal2x.22728be.png"
        alt=""
      />
    </div>
  </div>
  </>
  );
};

export default Hero;
