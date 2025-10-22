// src/App.jsx
import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import WeatherCard from "./WeatherCard";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import './Search.css'

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

// const API_KEY = import.meta.env.VITE_OPENWEATHER_KEY;
// For CRA: process.env.REACT_APP_OPENWEATHER_KEY

export default function App() {
  const [city, setCity] = useState("");
  const { data, loading, error, fetchByCity } = useWeather(WEATHER_API_KEY, MAP_API_KEY);
//   console.log(fetchByCity);
// fetchByCity("lagos");
  const onSearch = (e) => {
    e.preventDefault();
    if (!city) return;
    fetchByCity(city);
    setCity("");
  };

  return (
    <div style={{ padding: 20 }} className="search">
      <h1 className="title" style={{marginBottom: '20px'}}>Weather App</h1>
      <form onSubmit={onSearch}>
        <div className="form">
          <input
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="Enter city (e.g. Lagos)"
            aria-label="city"
          />
          <button className="button1" type="submit">Search</button>
        </div>
      </form>

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {data[0] && <WeatherCard weather={data} />}
    </div>
  );
}
