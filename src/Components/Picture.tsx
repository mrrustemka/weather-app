import { Grid } from "@mui/material";

function Picture({ data, images, submit }: any) {
  // const date: string = new Date(999999999999).toString();
  // const date: string = new Date().toDateString();

  return (
    <Grid container spacing={0}>
      <Grid>
        {images.length > 0 ? (
          <img alt="weather" src={images[1]} className="image" />
        ) : (
          ""
        )}
        {submit ? (
          <Grid
            container
            spacing={0}
            position={"absolute"}
            top={"75%"}
            left={"5%"}
          >
            <Grid item xs={5}>
              <h1>
                {Math.round(data.main.temp) ? Math.round(data.main.temp) : ""}
                &deg;
              </h1>
            </Grid>
            <Grid item xs={5}>
              <h2>{data.name + ", " + data.sys.country}</h2>
            </Grid>
            <Grid item xs={2}>
              <img
                alt="icon"
                src={
                  "http://openweathermap.org/img/w/" +
                  data.weather[0].icon +
                  ".png"
                }
              />
            </Grid>
            <h5>{new Date().toDateString()}</h5>
            <h5>{data.weather[0].main}</h5>
          </Grid>
        ) : (
          ""
        )}
      </Grid>
    </Grid>
  );
}

export default Picture;
