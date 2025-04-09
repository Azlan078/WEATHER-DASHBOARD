// src/App.js
import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import ErrorMessage from './components/ErrorMessage';
import RecentSearches from './components/RecentSearches';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [recentSearches, setRecentSearches] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  // API key would typically be stored in environment variables
  // For this demo purpose, we'll include it directly
  const API_KEY = "93788615356b513d89de1fc2cfbe9b2f"; // Replace with your actual API key
  
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}&units=metric`
      );
      
      if (!response.ok) {
        throw new Error(
          response.status === 404 
            ? 'City not found. Please check the spelling and try again.' 
            : 'Failed to fetch weather data. Please try again later.'
        );
      }
      
      const data = await response.json();
      setWeather(data);
      
      // Add to recent searches if not already present
      if (!recentSearches.includes(cityName)) {
        const updatedSearches = [cityName, ...recentSearches.slice(0, 4)];
        setRecentSearches(updatedSearches);
        localStorage.setItem('recentSearches', JSON.stringify(updatedSearches));
      }
      
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (city.trim()) {
      fetchWeather(city.trim());
    }
  };

  const handleRecentSearch = (cityName) => {
    setCity(cityName);
    fetchWeather(cityName);
  };

  const handleRefresh = () => {
    if (weather) {
      fetchWeather(weather.name);
    }
  };

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode');
  };

  // Load recent searches from localStorage on component mount
  useEffect(() => {
    const savedSearches = localStorage.getItem('recentSearches');
    if (savedSearches) {
      setRecentSearches(JSON.parse(savedSearches));
    }
    
    // Check user's preferred color scheme
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
      document.body.classList.add('dark-mode');
    }
  }, []);

  return (
    <div className={`app-container ${darkMode ? 'dark-mode' : ''}`}>
      <header>
        <h1>Weather Dashboard</h1>
        <button onClick={toggleTheme} className="theme-toggle">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </header>

      <main>
        <SearchBar 
          city={city} 
          setCity={setCity} 
          handleSearch={handleSearch} 
        />
        
        {recentSearches.length > 0 && (
          <RecentSearches 
            searches={recentSearches} 
            onSelect={handleRecentSearch} 
          />
        )}

        {loading && <Loader />}
        
        {error && <ErrorMessage message={error} />}
        
        {weather && !loading && !error && (
          <WeatherCard 
            weather={weather} 
            onRefresh={handleRefresh} 
          />
        )}
      </main>

      <footer>
        <p>Created for React Weather Dashboard Assignment</p>
      </footer>
    </div>
  );
}

export default App;