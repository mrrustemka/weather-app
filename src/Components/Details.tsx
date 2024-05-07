import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function Details({ data }: any) {
  return (
    <>
      {data.name ? (
        <div>
          <p>Description</p>
          <p>{data.weather[0].description}</p>
          <p>Humidity</p>
          <p>{data.main.humidity}</p>
          <p>Pressure</p>
          <p>{data.main.pressure}</p>
          <p>Wind</p>
          <p>{data.wind.speed}</p>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Details;
