# 🌤️ Weather Dashboard Web App

A modern, responsive Weather Dashboard built with **React.js**, powered by the **OpenWeatherMap API**. Users can search for any city worldwide and view real-time weather conditions.

## 🚀 Live Demo

👉 [Live Weather Dashboard](https://your-deployment-url.com)

> ✅ No login required  
> ✅ Loads directly to the main weather dashboard view

---

## 📌 Features

- 🔍 Search any city for current weather
- 🌡️ Displays temperature (°C), condition, humidity, wind speed
- 🖼️ Dynamic weather icons
- 🔄 Refresh button to update weather
- 📚 Recent Search History (last 5 cities)
- 🌙 Dark / Light mode toggle *(optional bonus)*
- 📈 5-Day Forecast using OpenWeatherMap's Forecast API *(optional bonus)*
- 🎯 Fully responsive design for mobile and desktop
- ⚠️ Graceful handling of loading and error states

---

## 🧱 Tech Stack

- **React.js** (with Hooks for state & effects)
- **OpenWeatherMap API**
- **CSS Modules / Styled Components / Basic CSS** *(No Tailwind)*
- **Framer Motion** (optional: for UI animations)
- **Deployed on:** Vercel / Netlify / GitHub Pages

---

## 📦 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard

2. Install Dependencies
bash
Copy
Edit
npm install
3. Add OpenWeatherMap API Key
Create a .env file in the root directory and add your API key:

ini
Copy
Edit
REACT_APP_OPENWEATHER_API_KEY=your_api_key_here
🔑 Get a free API key from: https://openweathermap.org/api

4. Start the App Locally
bash
Copy
Edit
npm start
The app will be available at http://localhost:3000

🌐 Deployment
This app can be deployed on any of the following platforms:

➤ Deploy on Vercel
Push code to GitHub

Import project at https://vercel.com

Set environment variable: REACT_APP_OPENWEATHER_API_KEY

Deploy with default settings

➤ Deploy on Netlify
Push to GitHub

Import repo at https://netlify.com

Set build command: npm run build

Set publish directory: build

Add environment variable: REACT_APP_OPENWEATHER_API_KEY

➤ Deploy on GitHub Pages
Install gh-pages:
npm install gh-pages

Add to package.json:

json
Copy
Edit
"homepage": "https://yourusername.github.io/weather-dashboard",
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
Run:

bash
Copy
Edit
npm run deploy
📁 Project Structure
java
Copy
Edit
├── public/
├── src/
│   ├── components/
│   │   ├── SearchBar.jsx
│   │   ├── WeatherCard.jsx
│   │   ├── Forecast.jsx
│   │   └── History.jsx
│   ├── App.jsx
│   ├── api/
│   │   └── weather.js
│   ├── utils/
│   └── styles/
│       └── App.css
├── .env
├── package.json
└── README.md
❗ Error Handling
If city not found ➝ "City not found. Please try again."

If API fails ➝ "Unable to fetch weather data at the moment."

Shows loader during data fetch

🧠 Future Improvements
Local storage persistence for recent searches

More detailed weather charts

Location-based weather on load

Unit toggle (°C/°F)
