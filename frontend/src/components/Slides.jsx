import React from 'react'
import './Slides.scss'
import Slider from 'infinite-react-carousel'

const Slides = ({children,arrowsScroll,slidesToShow}) => {
  return (
    <div className="slides">
        <div className="container">
            <Slider slidesToShow={slidesToShow} arrowsScroll={arrowsScroll}>
            {children}
            </Slider>
        </div>
    </div>
  )
}

export default Slides