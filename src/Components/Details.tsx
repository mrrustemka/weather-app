import { Typography } from "@mui/material";
import { Data } from "../types";

function Details(data: { data: Data }) {
  const weather: Data = data.data;
  return (
    <>
      {weather.name ? (
        <div className="details">
          <Typography gutterBottom variant="h6" component="div">
            Weather Details
          </Typography>
          <div className="details-description">
            <p>Description</p>
            <p>{weather.weather[0].description}</p>
          </div>
          <div className="details-description">
            <p>Humidity</p>
            <p>{weather.main.humidity}</p>
          </div>
          <div className="details-description">
            <p>Pressure</p>

            <p>{weather.main.pressure}</p>
          </div>
          <div className="details-description">
            <p>Wind</p>
            <p>{weather.wind.speed}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Details;
