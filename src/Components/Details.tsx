import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
import { Data } from "../types";

function Details({ data }: any) {
  console.log(data);
  // console.log(typeof data);

  return (
    <>
      {data.name ? (
        <div className="details">
          <Typography gutterBottom variant="h6" component="div">
            Weather Details
          </Typography>
          <div className="details-description">
            <p>Description</p>
            <p>{data.weather[0].description}</p>
          </div>
          <div className="details-description">
            <p>Humidity</p>
            <p>{data.main.humidity}</p>
          </div>
          <div className="details-description">
            <p>Pressure</p>

            <p>{data.main.pressure}</p>
          </div>
          <div className="details-description">
            <p>Wind</p>
            <p>{data.wind.speed}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default Details;
