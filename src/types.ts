export interface FormData {
  city: string;
}

// export interface Data {
//   temp: number;
//   name: string;
//   date: Date;
//   main: string;
//   description: string;
//   humidity: number;
//   pressure: number;
//   wind: number;
//   sys: Sys[];
//   weather: Weather[];
// }

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: Date;
  sunset: Date;
  type: number;
}

// export interface FormProps {
//   onSubmit: (data: FormData) => void;
// }

export interface Data {
  base: string;
  clouds: { all: number };
  cod: number;
  coord: { lon: number; lat: number };
  dt: Date;
  id: number;
  main: Main;
  name: string;
  rain: { "1h": number };
  sys: Sys[];
  timezone: Date;
  visibility: number;
  weather: Weather[];
  wind: Wind;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
