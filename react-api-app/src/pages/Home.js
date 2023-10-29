import './../App.css';
import flower from './../images/flower5.jpg';
import { useState, useEffect } from 'react';

const Home = () => {
  return (
    <div className="Box1">
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
      <span>
        <img alt="movie" className="ImageSmall" src={flower} />
      </span>
    </div>
  );
};

export default Home;
