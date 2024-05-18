export interface Data {
  coord: { lat: number; lon: number };
  weather: Weather[];
  base: string;
  main: Main;
  visibility: number;
  wind: Wind;
  clouds: { all: number };
  dt: number;
  sys: Sys;
  timezone: number;
  id: number;
  name: string;
  cod: number;
  rain?: { "1h": number };
}

export interface FormData {
  city: string;
}

export interface Weather {
  description: string;
  icon: string;
  id: number;
  main: string;
}

export interface Sys {
  country: string;
  id: number;
  sunrise: number;
  sunset: number;
  type: number;
}

export interface Wind {
  deg: number;
  gust?: number;
  speed: number;
}

export interface Main {
  feels_like: number;
  grnd_level?: number;
  humidity: number;
  pressure: number;
  sea_level?: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}
