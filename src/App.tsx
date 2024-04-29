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
  const [images, setImages] = React.useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [submit, setSubmit] = React.useState<boolean>(false);

  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  // function handleSubmit() {
  //   setSubmit(!submit);
  // }

  useEffect(
    function () {
      async function getWeather() {
        try {
          setIsLoading(true);
          setError("");
          const weatherResults = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&lang=en&units=metric&appid=`
          );

          const data1 = await weatherResults.json();

          const imagesResults = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${
              data1.weather[0].main + "-" + formData.city
            }&client_id=`
          );

          const data2 = await imagesResults.json();

          if (!weatherResults.ok) {
            throw new Error("Something went wrong with fetching data...");
          }

          if (data1.Response === "False") throw new Error("City not found");
          // setMovies(data1.Search);
          setWeather(data1);
          setImages([
            data2.results[0].links.download,
            data2.results[1].links.download,
            data2.results[2].links.download,
          ]);
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
    [submit]
  );

  return (
    <>
      <Picture data={weather} images={images} />
      <Search
        handleInputChange={handleInputChange}
        onSubmit={setSubmit}
        submit={submit}
        formData={formData}
        setFormData={setFormData}
      />
      <Details data={weather} />
    </>
  );
}

export default App;
