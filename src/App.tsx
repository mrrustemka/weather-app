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
    base: "",
    clouds: { all: 0 },
    cod: 0,
    coord: { lon: 0, lat: 0 },
    dt: new Date(),
    id: 0,
    main: {
      feels_like: 0,
      grnd_level: 0,
      humidity: 0,
      pressure: 0,
      sea_level: 0,
      temp: 0,
      temp_max: 0,
      temp_min: 0,
    },
    name: "",
    rain: { "1h": 0 },
    sys: [
      { country: "", id: 0, sunrise: new Date(), sunset: new Date(), type: 0 },
    ],
    timezone: new Date(),
    visibility: 0,
    weather: [{ description: "", icon: "", id: 0, main: "" }],
    wind: { speed: 0, deg: 0, gust: 0 },
  });
  // const [weather, setWeather] = React.useState<Data>({
  //   // temp: 0,
  //   name: "",
  //   // date: new Date(),
  //   main: {
  //     feels_like: 0,
  //     grnd_level: 0,
  //     humidity: 0,
  //     pressure: 0,
  //     sea_level: 0,
  //     temp: 0,
  //     temp_max: 0,
  //     temp_min: 0,
  //   },
  //   // description: "",
  //   // humidity: 0,
  //   // pressure: 0,
  //   wind: { speed: 0, deg: 0, gust: 0 },
  //   sys: [
  //     {
  //       country: "",
  //       id: 0,
  //       sunrise: new Date(),
  //       sunset: new Date(),
  //       type: 0,
  //     },
  //   ],
  //   weather: [{ description: "", icon: "", id: 0, main: "" }],
  // });
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
            `https://api.openweathermap.org/data/2.5/weather?q=${formData.city}&lang=en&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
          );

          const data1 = await weatherResults.json();
          console.log(data1);
          if (data1.message === "city not found") {
            throw new Error("City not found");
          }

          if (!weatherResults.ok) {
            throw new Error("Something went wrong with fetching data...");
          }

          const imagesResults = await fetch(
            `https://api.unsplash.com/search/photos?page=1&query=${
              data1.weather[0].main + "-" + formData.city
            }&client_id=${process.env.REACT_APP_IMAGES_API_KEY}`
          );

          const data2 = await imagesResults.json();

          // setMovies(data1.Search);
          setWeather(data1);
          setImages([
            data2.results[0].links.download,
            // data2.results[1].links.download,
            // data2.results[2].links.download,
            // data2.results[3].links.download,
          ]);
          setError("");
        } catch (err: any) {
          setError(err);
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
        <Grid item className="picture">
          <Picture data={weather} images={images} submit={submit} />
        </Grid>
        <Grid item className="info">
          <Card
            sx={{
              maxWidth: "100%",
              height: "100%",
              borderTopLeftRadius: "0",
              borderBottomLeftRadius: "0",
              backgroundColor: "#d8d3d3",
              // color: "#ffffff",
            }}
          >
            <Search
              handleInputChange={handleInputChange}
              onSubmit={setSubmit}
              submit={submit}
              formData={formData}
              setFormData={setFormData}
            />
            {error && <ErrorMessage message={error} />}
            <Details data={weather} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
