import React, { useState } from "react";
import "./Slides.scss";
import ReactSimplyCarousel from "react-simply-carousel";

const Slides = ({ children, itemsToScroll, itemsToShow }) => {
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  return (
    <div className="slides">
      <div className="container">
        <ReactSimplyCarousel
          activeSlideIndex={activeSlideIndex}
          onRequestChange={setActiveSlideIndex}
          itemsToShow={itemsToShow}
          itemsToScroll={itemsToScroll}
          forwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`>`}</span>,
          }}
          backwardBtnProps={{
            //here you can also pass className, or any other button element attributes
            style: {
              alignSelf: "center",
              background: "black",
              border: "none",
              borderRadius: "50%",
              color: "white",
              cursor: "pointer",
              fontSize: "20px",
              height: 30,
              lineHeight: 1,
              textAlign: "center",
              width: 30,
            },
            children: <span>{`<`}</span>,
          }}
          responsiveProps={[
            {
              itemsToShow: itemsToShow,
              itemsToScroll: itemsToScroll,
              minWidth: 768,
            },
          ]}
          speed={500}
          easing="linear"
        >
          {children}
        </ReactSimplyCarousel>
      </div>
    </div>
  );
};

export default Slides;
