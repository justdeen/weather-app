import React, {useState, useEffect} from "react";
import useWeather from "../hooks/useWeather";
import Today from "./Today";
import Hourly from "./Hourly";
import Daily from "./Daily";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import UserError from "./UserError";
import "./Search.css";

const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const MAP_API_KEY = import.meta.env.VITE_MAP_API_KEY;
const BASE = "https://api.weatherapi.com/v1/forecast.json";

export default function App({navElements}) {
  const [city, setCity] = useState("");
  const [userError, setUserError] = useState(null);
  const {todayData, hourlyData, dailyData, loading, setLoading, error, fetchByCity} = useWeather(WEATHER_API_KEY, MAP_API_KEY);

  const onSearch = (e) => {
    setUserError(null);
    e.preventDefault();
    if (!city) return;
    fetchByCity(city);
    setCity("");
  };
  const userLocation = async () => {
    setLoading(true);
    setUserError(null);
    
    navigator.geolocation.getCurrentPosition(success, denied, {
        enableHighAccuracy: false,
        timeout: 5000,
        maximumAge: 5000,
      });
    
    async function success(position) {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      const res = await fetch(`${BASE}?key=${WEATHER_API_KEY}&q=${lat},${lon}`);
      const data = await res.json();
      fetchByCity(data.location.name)
    }

    let count = 1
    function denied(e) {
      // setLoading(false);
      if (e.code === 3) {
        if (count < 2) {
          count++;
          navigator.geolocation.getCurrentPosition(success, denied, {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 5000,
          });
        } else {
          setLoading(false);
          setUserError("Location request timed out. Please try again later.");
        }
      } else setUserError("Location is off or blocked. Enable it in your phone and browser settings.");
    }
  };

  return (
    <div style={{padding: 20}} className="search">
      <h1 className="title" style={{marginBottom: "20px"}}>
        Weather App
      </h1>
      <form onSubmit={onSearch}>
        <div className="form">
          <input value={city} onChange={(e) => setCity(e.target.value)} placeholder="Enter city (e.g. Lagos)" aria-label="city" />
          <button className="button1" type="submit">
            Search
          </button>
        </div>
      </form>
      <button onClick={userLocation} className="button1 button2" type="submit">
        Use My Current Location
      </button>

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {userError && <UserError message={userError} />}
      {navElements.today === true && !userError && todayData[0] && <Today weather={todayData} />}
      {navElements.hourly === true && !userError && hourlyData[0] && <Hourly weather={hourlyData} />}
      {navElements.daily === true && !userError && dailyData[0] && <Daily weather={dailyData} />}
    </div>
  );
}
