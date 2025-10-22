import { useState } from 'react'
import './App.css'
import Search from './components/Search.jsx'
import Toggle from './components/Toggle.jsx'
// import { MaterialUISwitch } from './components/Toggle.jsx';

// let callApi = async (weatherApi, mapApi, city) => {
//   let res = await fetch(`http://api.weatherapi.com/v1/current.json?key=${weatherApi}&q=${city}`);
//   let res1 = await res.json();
//   console.log(res1);
//   let data = await fetch(`https://api.mapbox.com/search/geocode/v6/reverse?longitude=${res1.location.lon}&latitude=${res1.location.lat}&access_token=${mapApi}`);
//   let data1 = await data.json();
//   console.log(data1);
// };

// callApi("4558d53f9641485fb2a114816251910", "pk.eyJ1IjoianVzdGRlZW4iLCJhIjoiY21neHN1YnlsMDZjMjJzc2lxNWwyYnp1ciJ9.8LOyUX25n8lOQc4T2n5ZUw", "manchester");


// let callApi = async (weatherApi, mapApi, city) => {
//   let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherApi}`);
//   let res1 = await res.json();
//   console.log(res1);
//   // console.log(res1.coord.lat, res1.coord.lon);
//   let data = await fetch(`https://api.mapbox.com/search/geocode/v6/reverse?longitude=${res1.coord.lon}&latitude=${res1.coord.lat}&access_token=${mapApi}`);
//   let data1 = await data.json();
//   console.log(data1);
// };

// callApi("2e56f812b32fe4f157c191e9e0ffb2c7", "pk.eyJ1IjoianVzdGRlZW4iLCJhIjoiY21neHN1YnlsMDZjMjJzc2lxNWwyYnp1ciJ9.8LOyUX25n8lOQc4T2n5ZUw", "warri");

function App() {

  return (
    <>
      <Toggle />
      <Search />
    </>
  )
}

export default App
