import React, { useState, useEffect } from "react";
import "./StarRating.css";
// import { ReactComponent as Logo } from "./logo.svg";

const Star = () => {
  return (
    <div
      className="star"
    >
      <svg
        height="55px"
        width="53px"
        viewBox="0 0 25 23"
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

  return (
    <div className="App">
      <div class="header">
        <h1>Star Rating</h1>
      </div>
      <div class="flex-container">
        
      </div>
    </div>
  );
}

export default App;