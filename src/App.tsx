import React from "react";
import Picture from "./Components/Picture";
import Details from "./Components/Details";
import Search from "./Components/Search";
import { useEffect, useState } from "react";
import { FormData, Data } from "./types";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState<FormData>({ city: "" });
  const [weather, setWeather] = React.useState<Data>({
    temp: 0,
    name: "",
    date: new Date(),
    main: "",
    description: "",
    humidity: 0,
    pressure: 0,
    wind: 0,
    sys: [
      {
        country: "",
        id: 0,
        sunrise: new Date(),
        sunset: new Date(),
        type: 0,
      },
    ],
    weather: [{ description: "", icon: "", id: 0, main: "" }],
  });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  // const [formData, setFormData] = React.useState<FormData>({ city: "" });

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    console.log("1");
  }

  function handleSubmit(formData: FormData) {
    setFormData(formData);
    console.log("2");
  }

  useEffect(
    function () {
      async function getWeather() {
        try {
          setIsLoading(true);
          setError("");
          const res = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&lang=en&units=metric&appid=f71010b80a0cfa1712fe9aebe36c2d58`
          );

          if (!res.ok) {
            throw new Error("Something went wrong with fetching data...");
          }

          const data = await res.json();

          if (data.Response === "False") throw new Error("City not found");
          // setMovies(data.Search);
          setWeather(data);
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
      <Picture data={weather} />
      <Search
        handleInputChange={handleInputChange}
        onSubmit={handleSubmit}
        formData={formData}
        setFormData={setFormData}
      />
      <Details data={weather} />
    </>
  );
}

export default App;
