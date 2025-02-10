import React from "react";
import "./Home.css";

const Home = ({ setShowValentine }) => {
  return (
    <div className="home-container">
      <h1>Happy Valentine's Day! 💖</h1>
      <p>Welcome to Vedant's Special website. </p>
      <button onClick={() => setShowValentine(true)}>Will you be my Valentine?</button>
    </div>
  );
};

export default Home;