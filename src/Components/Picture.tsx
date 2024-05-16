import { Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

function Picture({ data, images, submit }: any) {
  return (
    <>
      {images.length > 0 ? (
        <Card
          sx={{
            maxWidth: "auto",
            borderTopRightRadius: "0",
            borderBottomRightRadius: "0",
          }}
        >
          <CardMedia
            sx={{ height: "auto" }}
            image={images[1]}
            title="City"
            className=""
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
                }}
              >
                <Typography gutterBottom variant="h4" component="div">
                  {Math.round(data.main.temp) ? Math.round(data.main.temp) : ""}
                  &deg;
                </Typography>
                <Typography gutterBottom variant="h5" component="div">
                  {data.name + ", " + data.sys.country}
                </Typography>
                <img
                  alt="icon"
                  src={
                    "http://openweathermap.org/img/w/" +
                    data.weather[0].icon +
                    ".png"
                  }
                />
                <Typography gutterBottom variant="h6" component="div">
                  {new Date().toDateString()}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                  {data.weather[0].main}
                </Typography>
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
