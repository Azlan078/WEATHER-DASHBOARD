// src/components/Loader.js
import React from 'react';

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p>Fetching weather data...</p>
    </div>
  );
}

export default Loader;