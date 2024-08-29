import React, { useState, useEffect } from "react";
import "./StarRating.css";
// import { ReactComponent as Logo } from "./logo.svg";

const Star = ({ index, starIndex, starHoverIndex, onClick, onMouseEnter, onMouseLeave }) => {
  console.log(index, 'index');
  const handleStarClick = (e) => {
    const { left, width } = e.target.getBoundingClientRect();
    const clickPosition = e.clientX - left;
    const isHalf = clickPosition < width/2;
    onClick(index, isHalf);
  }
  return (
    <div
      className="star"
    >
      <svg
        height="55px"
        width="53px"
        viewBox="0 0 25 23"
        className={((index<=starIndex) || ((starHoverIndex>=index))) ? "star-rating-filled" : (starHoverIndex >= starIndex-0.5) ? "star-rating-half" : "star-rating-blank"}
        onClick={handleStarClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        data-rating="1"
      >
        <polygon
          stroke-width="0"
          points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78"
        />
      </svg>
    </div>
  );
};

function App() {
  const stars = new Array(5).fill(0);
  const [starIndex, setStarIndex] = useState(-1);
  const [starHoverIndex, setStarHoverIndex] = useState(-1);

  const handleClick = (index, isHalf) => {
    let newIndex = index;
    if(isHalf) {
      newIndex += 0.5;
    }
    if(newIndex === starIndex) {
      setStarIndex(-1);
      return;
    }
    setStarIndex(newIndex);
  }

  const handleMouseEnter = (index) => {
    setStarHoverIndex(index);
  }

  const handleMouseLeave = () => {
    setStarHoverIndex(-1);
  }

  return (
    <div className="App">
      <div class="header">
        <h1>Star Rating</h1>
      </div>
      <div class="flex-container">
        {
          stars.map((star, idx) => (
            <Star 
              key={idx}
              index={idx}
              starIndex={starIndex}
              starHoverIndex={starHoverIndex}
              onClick={() => handleClick(idx)}
              onMouseEnter={() => handleMouseEnter(idx)}
              onMouseLeave={handleMouseLeave}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;