import React from "react";
import { useEffect } from "react";
// import { WEATHER_API_KEY} from '../'
// import process.e from "process";
import "../react-app-env";

function Search() {
  // useEffect(function () {
  //   async function getWeather() {
  //     const res = await fetch(
  //       `https://api.openweathermap.org/data/2.5/weather?q=Batumi&lang=en&units=metric&appid=${api_key}`
  //     );
  //     const data = await res.json();
  //     console.log(data);
  //   }
  //   getWeather();
  // }, []);

  return (
    <div>
      <input placeholder="Enter City"></input>
    </div>
  );
}

export default Search;
