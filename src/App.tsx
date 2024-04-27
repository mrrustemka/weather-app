import React from "react";
import Picture from "./Components/Picture";
import Details from "./Components/Details";
import Search from "./Components/Search";
import { useEffect, useState } from "react";
import { FormData } from "./types";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState<FormData>({ city: "" });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const [formData, setFormData] = React.useState<FormData>({ city: "" });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  function handleSubmit(formData: FormData) {
    setFormData(formData);
  }

  useEffect(
    function () {
      async function getWeather() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&lang=en&units=metric&appid=${key}`
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching data...");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("City not found");
          // setMovies(data.Search);
          console.log("Temp", data.main.temp);
          console.log("Name", data.name);
          console.log("Date", data.dt);
          console.log("Main", data.weather[0].main);
          console.log("Description", data.weather[0].description);
          console.log("Humidity", data.main.humidity);
          console.log("Pressure", data.main.pressure);
          console.log("Wind", data.wind.speed);
          console.log("Sunrise", data.sys.sunrise);
          console.log("Sunset", data.sys.sunset);
          setError("");
        } catch (err: any) {
          if (err.name !== "AbortError") {
            console.log(err.message);
            setError(err.message);
          }
        } finally {
          setIsLoading(false);
        }
      }
      if (formData.city.length < 3) {
        setError("");
        return;
      }
      // handleCloseMovie();
      getWeather();

      // return function () {
      //   controller.abort();
      // };
    },
    [formData]
  );

  return (
    <>
      <Picture />
      <Search
        handleInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <Details />
    </>
  );
}

export default App;
