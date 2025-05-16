# ⛅ Weather Dashboard

A modern, responsive Weather Dashboard built with **React.js**, powered by the **OpenWeatherMap API**. Get real-time weather updates for any city worldwide with a sleek, user-friendly interface.

## 🎯 Key Features

- **Real-time Weather Data** 
  - Current temperature in Celsius
  - Weather conditions with dynamic icons
  - Humidity and wind speed metrics
  - Location-specific updates

- **User Experience**
  - 🔍 Instant city search functionality
  - 🌙 Dark/Light theme toggle
  - 📱 Fully responsive design
  - 🔄 One-click data refresh
  - 📚 Recent searches history (last 5 cities)

- **Technical Features**
  - ⚡ Fast loading times
  - 🛡️ Error handling & loading states
  - 💾 Local storage persistence
  - 🌐 Cross-browser compatibility

## 🚀 Live Demo

[View Live Demo](https://your-deployment-url.com) | [GitHub Repository](https://github.com/your-username/weather-dashboard)

## 🛠️ Built With

- **Frontend:** React.js 18.x
- **API:** OpenWeatherMap API
- **Styling:** CSS Modules
- **State Management:** React Hooks
- **HTTP Client:** Fetch API
- **Deployment:** Vercel/Netlify

## ⚙️ Installation & Setup

1. **Clone the repository**
```bash
git clone https://github.com/your-username/weather-dashboard.git
cd weather-dashboard
```

2. **Install dependencies**
```bash
npm install
```

3. **Configure environment variables**
   Create a `.env` file in the root directory:
```properties
REACT_APP_WEATHER_API_KEY=your_api_key_here
```
> 🔑 Get your API key from [OpenWeatherMap](https://openweathermap.org/api)

4. **Start the development server**
```bash
npm start
```
Visit `http://localhost:3000` to view the app

## 📂 Project Structure

```plaintext
weather-dashboard/
├── src/
│   ├── components/
│   │   ├── SearchBar/
│   │   ├── WeatherCard/
│   │   ├── Loader/
│   │   └── ErrorMessage/
│   ├── App.js
│   └── App.css
├── .env
├── .gitignore
└── README.md
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Add environment variable: `REACT_APP_WEATHER_API_KEY`
3. Deploy with default settings

### Netlify
1. Connect your GitHub repository
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Add environment variable: `REACT_APP_WEATHER_API_KEY`

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/AmazingFeature`
3. Commit your changes: `git commit -m 'Add some AmazingFeature'`
4. Push to the branch: `git push origin feature/AmazingFeature`
5. Open a pull request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

## 🙏 Acknowledgments

- OpenWeatherMap API for weather data
- React.js community
- All contributors and testers

---

Made with ❤️ by [Your Name]
