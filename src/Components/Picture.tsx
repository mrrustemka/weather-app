function Picture({ data }: any) {
  return (
    <div>
      <img alt="weather"></img>
      <h1>{data.main.temp}</h1>
      <h2>{data.name}</h2>
      <h5>{data.dt}</h5>
      <img alt="icon"></img>
      <h5>{data.weather[0].main}</h5>
    </div>
  );
}

export default Picture;
