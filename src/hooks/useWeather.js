// src/hooks/useWeather.js
import { useState, useCallback } from "react";

const BASE = "http://api.weatherapi.com/v1/current.json"; // current weather endpoint

export default function useWeather(weatherApi, mapApi) {
  const [data, setData] = useState([null, null]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchByCity = (async (city) => {
    if (!city) return;
    setLoading(true);
    setError(null);
    setData([null, null]);

    try {
      const res = await fetch(`${BASE}?key=${weatherApi}&q=${city}`);
      if (!res.ok) {
        if (res.status === 404) throw new Error("City not found");
        throw new Error("Failed to fetch");
      }
      const weatherData = await res.json();
      
      let lat = weatherData.location.lat
      let lon = weatherData.location.lon
      
      let res2 = await fetch(`https://api.mapbox.com/search/geocode/v6/reverse?longitude=${lon}&latitude=${lat}&access_token=${mapApi}`);
      if (!res2.ok) {
        if (res2.status === 404) throw new Error("City not found");
        throw new Error("Failed to fetch");
      }
      let mapData = await res2.json();
      setData([ weatherData, mapData ]);
      
    } catch (err) {
      setError(err.message || "Unknown error");
    } finally {
      setLoading(false);
    }
  });

  return { data, loading, error, fetchByCity };
}
