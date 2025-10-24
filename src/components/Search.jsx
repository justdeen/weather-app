import React, { useState } from "react";
import useWeather from "../hooks/useWeather";
import Today from "./Today";
import Hourly from "./Hourly";
import Daily from "./Daily"
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import './Search.css'

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;

export default function App({navElements}) {
  const [city, setCity] = useState("");
  const { todayData, hourlyData, dailyData, loading, error, fetchByCity } = useWeather(WEATHER_API_KEY, MAP_API_KEY);
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
      {navElements.today === true && todayData[0] && <Today weather={todayData} />}
      {navElements.hourly === true && hourlyData[0] && <Hourly weather={hourlyData} />}
      {navElements.daily === true && dailyData[0] && <Daily weather={dailyData} />}
    </div>
  );
}
