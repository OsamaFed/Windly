import React, { useState, useEffect } from "react";
import "./WeatherStyle.css"
import moment from 'moment';
import 'moment/locale/ar';
import './App.css';
import { useTranslation } from 'react-i18next';
import './i18n';
import './fonts.css';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './weatherSlice';

export default function WeatherApp() {
  const dispatch = useDispatch();
  const { current, forecast, loading, error } = useSelector(state => state.weather);
  

  const { t, i18n } = useTranslation();

  const [Lan, setLan] = useState(() => localStorage.getItem('preferred-language') || 'ar');
  const [currentDate, setCurrentDate] = useState(null);

  // Translate weather conditions
  const translateWeatherCondition = (condition) => {
    if (!condition) return "";
    const translated = t(condition);
    return translated !== condition ? translated : condition;
  };

  // Update language and direction
  useEffect(() => {
    document.documentElement.lang = Lan;
    document.documentElement.dir = Lan === 'ar' ? 'rtl' : 'ltr';
    document.body.className = `lang-${Lan}`;
    moment.locale(Lan);

    const now = new Date();
    setCurrentDate(now.toLocaleDateString(
      Lan === 'ar' ? 'ar-EG' : 'en-US',
      { weekday: 'long', day: 'numeric', month: 'long' }
    ));
  }, [Lan]);

  const toggleLanguage = () => {
    const newLanguage = Lan === 'ar' ? 'en' : 'ar';
    setLan(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('preferred-language', newLanguage);
  };

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') || 'ar';
    setLan(savedLanguage);
    i18n.changeLanguage(savedLanguage);
    moment.locale(savedLanguage);
  }, [i18n]);

  const getFormattedTime = () => moment().format('MMMM Do YYYY, h:mm:ss a');

  useEffect(() => { 
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' }); 
    getCurrentLocationWeather(); // استدعاء الموقع التلقائي
  }, [dispatch]);
  // البحث عن مدينة
  const searchCity = (e) => {
    e.preventDefault();
    const city = e.target.city.value.trim();
    if (city) {
      dispatch(fetchWeather({ city }));
      e.target.reset();
    }
  };

  // الموقع التلقائي
  const getCurrentLocationWeather = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          dispatch(fetchWeather({ lat: latitude, lon: longitude }));
        },
        (error) => {
          console.error("Error getting location:", error);
          alert("Unable to get your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by your browser.");
    }
  };

  return (
    <main className="wrap">
      <header className="header">
        <h1 className="title">Windly🌩️🌪️</h1>
        <p className="description">{t("description")}</p>
      </header>

      <div className="search-container">
        <form className="search" onSubmit={searchCity}>
          <input name="city" type="text" placeholder={t("Search city")} disabled={loading} />
          <button type="submit" title={t("Search city")} disabled={loading}>🔎</button>
        </form>

        <button
          className="location-btn"
  onClick={getCurrentLocationWeather} disabled={loading}>
          📍 {t("Use my location")}
        </button>

        <button className="location-btn" onClick={toggleLanguage} disabled={loading}>
          {Lan === 'ar' ? 'English' : 'العربية'}
        </button>
      </div>

      {loading && <div className="loading-message">{t("Loading")}</div>}
      {error && <div className="error-message">{error}</div>}

      <section className={`card ${loading ? 'loading' : ''}`}>
        <div className="current">
          <div>
            <h2 className="city">{current?.city || (loading ? t("Loading") : t("Current city"))}</h2>
            <p className="date">{currentDate || getFormattedTime()}</p>
          </div>
          <div className="now">
            <p className="temp">{current?.temp !== null ? current.temp + "°C" : "--"}</p>
            <div className="cond">{translateWeatherCondition(current?.condition)}</div>
          </div>
        </div>

        <div className="icon-wrap">
          {current?.icon && <div className="icon">
            <img src={`https://openweathermap.org/img/wn/${current.icon}.png`} alt={translateWeatherCondition(current.condition)} />
          </div>}
        </div>

        <div className="stats">
          <div className="stat">
            <div className="label">{t("Feels like")}</div>
            <div className="value">{current?.feelsLike !== null ? current.feelsLike + "°C" : "--"}</div>
          </div>
          <div className="stat">
            <div className="label">{t("Humidity")}</div>
            <div className="value">{current?.humidity !== null ? current.humidity + "%" : "--"}</div>
          </div>
          <div className="stat">
            <div className="label">{t("Wind")}</div>
            <div className="value">{current?.windSpeed !== null ? current.windSpeed + " m/s" : "--"}</div>
          </div>
        </div>
      </section>

      <section style={{ marginTop: "22px" }}>
        <h3 className="section-title">{t("5-Day Weather Forecast")}</h3>
        <div className="forecast">
          {forecast?.map((day, i) =>
            <div key={i} className="f-card">
              <div className="f-day">{day.day}</div>
              <div className="f-icon">
                <img src={`https://openweathermap.org/img/wn/${day.icon}.png`} alt={translateWeatherCondition(day.condition)} />
              </div>
              <div className="f-cond">{translateWeatherCondition(day.condition)}</div>
              <div className="f-temps">
                <span className="hi">{day.high}°C</span>
                <span className="lo">{day.low}°C</span>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}