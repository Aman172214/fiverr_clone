import React from "react";
import "./CategorySlide.scss";
import { Link } from "react-router-dom";

const CategorySlide = ({ item }) => {
  return (
    <Link to="/gigs/1" className="link">
      <div className="categorySlide">
        <img src={item.img} alt="" />
        <span className="desc">{item.desc}</span>
        <span className="title">{item.title}</span>
      </div>
    </Link>
  );
};

export default CategorySlide;
