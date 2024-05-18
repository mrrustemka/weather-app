import { Box, Typography } from "@mui/material";
import { Data } from "../types";

function Details(data: { data: Data }) {
  const weather: Data = data.data;
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
            sx={{ textAlign: "center" }}
          >
            Weather Details
          </Typography>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography gutterBottom component="p" sx={{ float: "left" }}>
              Description
            </Typography>
            <Typography gutterBottom component="p" sx={{ float: "right" }}>
              {weather.weather[0].description}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography gutterBottom component="p" sx={{ float: "left" }}>
              Humidity
            </Typography>
            <Typography gutterBottom component="p" sx={{ float: "right" }}>
              {weather.main.humidity}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography gutterBottom component="p" sx={{ float: "left" }}>
              Pressure
            </Typography>

            <Typography gutterBottom component="p" sx={{ float: "right" }}>
              {weather.main.pressure}
            </Typography>
          </Box>
          <Box component="div" sx={{ display: "flow-root" }}>
            <Typography gutterBottom component="p" sx={{ float: "left" }}>
              Wind
            </Typography>
            <Typography gutterBottom component="p" sx={{ float: "right" }}>
              {weather.wind.speed}
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
