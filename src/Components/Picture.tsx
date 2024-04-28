function Picture({ data, images }: any) {
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
      <h1>{data.main.temp}</h1>
      <h2>{data.name}</h2>
      <h5>{data.dt}</h5>
      <img alt="icon"></img>
      <h5>{data.weather[0].main}</h5>
    </div>
  );
}

export default Picture;
