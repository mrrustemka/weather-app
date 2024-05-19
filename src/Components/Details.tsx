import { Box, Typography } from "@mui/material";
import { Data } from "../types";

function Details(data: { data: Data }) {
  const weather: Data = data.data;

  const timestamp = Date.now() + weather.timezone * 1000;
  const date: Date = new Date(timestamp);
  const month: number = date.getUTCMonth() + 1;
  const parseDate: string =
    date.getUTCHours() +
    ":" +
    date.getUTCMinutes() +
    " " +
    month +
    "/" +
    date.getUTCDate() +
    "/" +
    date.getUTCFullYear();

  return (
    <>
      {weather.name ? (
        <Box
          sx={{
            padding: "16px",
          }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            sx={{ textAlign: "center", fontFamily: "RobotoMono, sans-serif" }}
          >
            Weather Details
          </Typography>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "left", fontFamily: "RobotoMono, sans-serif" }}
            >
              Description
            </Typography>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "right", fontFamily: "RobotoMono, sans-serif" }}
            >
              {weather.weather[0].description}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "left", fontFamily: "RobotoMono, sans-serif" }}
            >
              Humidity
            </Typography>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "right", fontFamily: "RobotoMono, sans-serif" }}
            >
              {weather.main.humidity}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "left", fontFamily: "RobotoMono, sans-serif" }}
            >
              Pressure
            </Typography>

            <Typography
              gutterBottom
              component="p"
              sx={{ float: "right", fontFamily: "RobotoMono, sans-serif" }}
            >
              {weather.main.pressure}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "left", fontFamily: "RobotoMono, sans-serif" }}
            >
              Wind
            </Typography>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "right", fontFamily: "RobotoMono, sans-serif" }}
            >
              {weather.wind.speed}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "left", fontFamily: "RobotoMono, sans-serif" }}
            >
              Local Time
            </Typography>
            <Typography
              gutterBottom
              component="p"
              sx={{ float: "right", fontFamily: "RobotoMono, sans-serif" }}
            >
              {parseDate}
            </Typography>
          </Box>
        </Box>
      ) : (
        <></>
      )}
    </>
  );
}

export default Details;
