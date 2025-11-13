import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_KEY = "6fb51e48da7b9f2cd8d516e08402a445";


export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ city, lat, lon } = {}) => {
    const urlCurrent = city
      ? `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
      : `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const urlForecast = city
      ? `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
      : `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

    const currentRes = await axios.get(urlCurrent);
    const forecastRes = await axios.get(urlForecast);

    // معالجة البيانات مباشرة قبل الإرجاع
    const currentData = currentRes.data;
    const forecastData = forecastRes.data.list;

    const dailyForecast = [];
    for (let i = 0; i < forecastData.length; i += 8) {
      const dayDate = new Date(forecastData[i].dt_txt);
      const originalDay = dayDate.toLocaleDateString('en-US', { weekday: "short" });
      dailyForecast.push({
        originalDay,
        day: originalDay, // لاحقًا ممكن ترجمه حسب اللغة
        icon: forecastData[i].weather[0].icon,
        condition: forecastData[i].weather[0].description,
        high: Math.round(forecastData[i].main.temp_max - 273.15),
        low: Math.round(forecastData[i].main.temp_min - 273.15),
      });
    }

    return {
      current: {
        city: currentData.name,
        temp: Math.round(currentData.main.temp - 273.15),
        condition: currentData.weather[0].description,
        icon: currentData.weather[0].icon,
        feelsLike: Math.round(currentData.main.feels_like - 273.15),
        humidity: currentData.main.humidity,
        windSpeed: currentData.wind ? currentData.wind.speed : null,
      },
      forecast: dailyForecast,
    };
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: {
      city: "",
      temp: null,
      condition: "",
      icon: "",
      feelsLike: null,
      humidity: null,
      windSpeed: null,
    }
  },
  reducers: {
    clearWeather: (state) => {
      state.current = {};
      state.forecast = [];
      state.loading = false;
      state.error = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.loading = false;
        state.current = action.payload.current;
        state.forecast = action.payload.forecast;
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch weather";
      });
  }
});

export const { clearWeather } = weatherSlice.actions;
export default weatherSlice.reducer;