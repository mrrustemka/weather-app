import React from "react";
import Picture from "./Components/Picture";
import Details from "./Components/Details";
import Search from "./Components/Search";
import ErrorMessage from "./Components/ErrorMessage";
import { useEffect, useState } from "react";
import { FormData, Data } from "./types";
import { Card, Grid } from "@mui/material";
import "./App.css";

function App() {
  const [formData, setFormData] = React.useState<FormData>({ city: "" });
  const [weather, setWeather] = React.useState<Data>({
    coord: { lon: 0, lat: 0 },
    weather: [{ description: "", icon: "", id: 0, main: "" }],
    base: "",
    main: {
      feels_like: 0,
      humidity: 0,
      pressure: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    visibility: 0,
    wind: { speed: 0, deg: 0 },
    clouds: { all: 0 },
    dt: 0,
    sys: { country: "", id: 0, sunrise: 0, sunset: 0, type: 0 },
    timezone: 0,
    id: 0,
    name: "",
    cod: 0,
  });
  const [images, setImages] = React.useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = React.useState<string>("");
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
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&lang=en&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );

          const data1 = await weatherResults.json();
          if (data1.message === "city not found") {
            throw new Error("City not found");
          }

          if (!weatherResults.ok) {
            throw new Error("Something went wrong with fetching data...");
          }

          const imagesResults = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${
              formData.city + "-" + data1.weather[0].main
            }&client_id=${process.env.REACT_APP_IMAGES_API_KEY}`
          );

          const data2 = await imagesResults.json();
          // setMovies(data1.Search);
          setWeather(data1);
          setImages(data2.results[0].links.download);
          setError("");
        } catch (err: any) {
          setError(err.message);
          // if (err.name !== "AbortError") {
          //   setError(err.message);
          // }
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
      <Grid
        container
        spacing={0}
        gridTemplateColumns={"1fr auto auto 1fr"}
        gridTemplateRows={"minmax(80px, 1fr) auto minmax(80px, 1fr)"}
        display={"grid"}
      >
        <Grid
          item
          sx={{
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 2,
            gridColumnEnd: 3,
          }}
        >
          <Picture data={weather} images={images} />
        </Grid>
        <Grid
          item
          sx={{
            gridRowStart: 2,
            gridRowEnd: 3,
            gridColumnStart: 3,
            gridColumnEnd: 4,
          }}
        >
          <Card
            sx={{
              maxWidth: "100%",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
              backgroundColor: "#d8d3d3",
            }}
          >
            <Search
              handleInputChange={handleInputChange}
              onSubmit={setSubmit}
              submit={submit}
              formData={formData.city}
            />
            {error && <ErrorMessage error={error} />}
            <Details data={weather} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
