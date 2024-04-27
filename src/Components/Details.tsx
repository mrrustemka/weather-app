function Details({ data }: any) {
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
      <p>{data.sys.sunrise}</p>
      <p>Sunset</p>
      <p>{data.sys.sunset}</p>
    </div>
  );
}

export default Details;
