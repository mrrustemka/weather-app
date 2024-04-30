function Picture({ data, images }: any) {
  const date: string = new Date(data?.dt).toDateString();
  return (
    <div>
      {images.length > 0 ? (
        <img alt="weather" src={images[0]} className="image" />
      ) : (
        ""
      )}
      {images.length > 0 ? (
        <img alt="weather" src={images[1]} className="image" />
      ) : (
        ""
      )}
      {images.length > 0 ? (
        <img alt="weather" src={images[2]} className="image" />
      ) : (
        ""
      )}
      <h1>{Math.round(data.main.temp) ? Math.round(data.main.temp) : ""}</h1>
      <h2>{data.name}</h2>
      <h5>{date}</h5>
      <img
        alt="icon"
        src={"http://openweathermap.org/img/w/" + data.weather[0].icon + ".png"}
      />
      <h5>{data.weather[0].main}</h5>
    </div>
  );
}

export default Picture;
