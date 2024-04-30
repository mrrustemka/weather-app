function Details({ data }: any) {
  const one: string = new Date(data?.sys?.sunrise).toDateString();
  const two: string = new Date(data?.sys?.sunset).toDateString();

  return (
    <div>
      <p>Description</p>
      <p>{data.weather[0].description}</p>
      <p>Humidity</p>
      <p>{data.main.humidity}</p>
      <p>Pressure</p>
      <p>{data.main.pressure}</p>
      <p>Wind</p>
      <p>{data.wind.speed}</p>
      <p>Sunrise</p>
      <p>{one ? one : ""}</p>
      <p>Sunset</p>
      <p>{two}</p>
    </div>
  );
}

export default Details;
