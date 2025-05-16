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

  // Use environment variable for API key
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    if (!API_KEY) {
      console.error('API key is missing! Check your .env file');
      setError('API configuration error');
    }
  }, [API_KEY]);

  const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';
  const fetchWeather = async (cityName) => {
    setLoading(true);
    setError(null);
    
    try {
      if (!API_KEY) {
        throw new Error('API key is not configured. Please check your environment settings.');
      }

      const response = await fetch(
        `${BASE_URL}?q=${encodeURIComponent(cityName)}&appid=${API_KEY}&units=metric`,
        {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to fetch weather data');
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
      console.error('Fetch error:', err);
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