import React from "react";
import { Link } from "react-router-dom";
import "./ProjectSlide.scss";

const ProjectSlide = ({ slide }) => {
  return (
    <Link to="/" className="link">
      <div className="projectSlide">
        <img src={slide.img} alt="" />
        <div className="info">
          <img src={slide.pp} alt="" />
          <div className="texts">
            <h2>{slide.cat}</h2>
            <span>{slide.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectSlide;
