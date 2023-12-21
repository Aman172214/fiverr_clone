import React from "react";
import "./CategorySlide.scss";
import { Link } from "react-router-dom";

const CategorySlide = ({ slide }) => {
  return (
    <Link to="/gigs" className="link">
      <div className="categorySlide">
        <img src={slide.img} alt="" />
        <span className="desc">{slide.desc}</span>
        <span className="title">{slide.title}</span>
      </div>
    </Link>
  );
};

export default CategorySlide;
