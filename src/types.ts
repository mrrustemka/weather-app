export interface FormData {
  city: string;
}

export interface Data {
  temp: number;
  name: string;
  date: Date;
  main: string;
  description: string;
  humidity: number;
  pressure: number;
  wind: number;
  sys: Sys[]  ;
  weather: Weather[];
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
  sunrise: Date;
  sunset: Date;
  type: number;
}

// export interface FormProps {
//   onSubmit: (data: FormData) => void;
// }
