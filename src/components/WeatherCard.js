// src/components/WeatherCard.js
import React from 'react';

function WeatherCard({ weather, onRefresh }) {
  return (
    <div className="weather-card">
      <div className="weather-header">
        <h2>{weather.name}, {weather.sys.country}</h2>
        <button onClick={onRefresh} className="refresh-button">
          🔄 Refresh
        </button>
      </div>
      
      <div className="weather-body">
        <div className="temperature-section">
          <img 
            // Change from http to https in WeatherCard.js
src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`} 
            alt={weather.weather[0].description} 
            className="weather-icon"
          />
          <div className="temperature">
            <h3>{Math.round(weather.main.temp)}°C</h3>
            <p className="description">{weather.weather[0].description}</p>
          </div>
        </div>
        
        <div className="weather-details">
          <div className="detail-item">
            <span className="label">Feels like:</span>
            <span className="value">{Math.round(weather.main.feels_like)}°C</span>
          </div>
          <div className="detail-item">
            <span className="label">Humidity:</span>
            <span className="value">{weather.main.humidity}%</span>
          </div>
          <div className="detail-item">
            <span className="label">Wind:</span>
            <span className="value">{(weather.wind.speed * 3.6).toFixed(1)} km/h</span>
          </div>
          <div className="detail-item">
            <span className="label">Pressure:</span>
            <span className="value">{weather.main.pressure} hPa</span>
          </div>
          <div className="detail-item">
            <span className="label">Visibility:</span>
            <span className="value">{(weather.visibility / 1000).toFixed(1)} km</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;