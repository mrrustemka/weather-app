import {
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Link,
} from "@mui/material";
import { Data } from "../types";

function Picture(data: { data: Data; image: string }) {
  const weather: Data = data.data;
  return (
    <>
      {data.image.length > 0 ? (
        <Card
          sx={{
            maxWidth: "auto",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
        >
          <CardMedia
            sx={{ height: "auto" }}
            image={data.image}
            title={weather.name}
          >
            <CardContent
              sx={{
                paddingTop: "100%",
                paddingLeft: "20px",
                paddingRight: "120px",
              }}
            >
              <Grid
                container
                spacing={1}
                display={"block"}
                sx={{
                  backgroundColor: "#d8d3d369",
                  borderRadius: "4px",
                  padding: "8px",
                  img: {
                    display: "inline-block",
                    verticalAlign: "top",
                  },
                }}
              >
                <img
                  alt="icon"
                  src={
                    "http://openweathermap.org/img/w/" +
                    weather.weather[0].icon +
                    ".png"
                  }
                />
                <Typography
                  gutterBottom
                  variant="h4"
                  component="div"
                  sx={{
                    fontFamily: "RobotoMono, sans-serif",
                    display: "inline-block",
                  }}
                >
                  {Math.round(weather.main.temp)
                    ? Math.round(weather.main.temp)
                    : ""}
                  &deg;
                </Typography>{" "}
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontFamily: "RobotoMono, sans-serif" }}
                >
                  {weather.name + ", " + weather.sys.country}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "RobotoMono, sans-serif" }}
                >
                  {new Date().toDateString()}
                </Typography>
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  sx={{ fontFamily: "RobotoMono, sans-serif" }}
                >
                  {weather.weather[0].main}
                </Typography>
                {"Provided by "}
                <Link href={data.image} color="inherit">
                  unsplash
                </Link>
              </Grid>
            </CardContent>
          </CardMedia>
        </Card>
      ) : (
        ""
      )}
    </>
  );
}

export default Picture;
