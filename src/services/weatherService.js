import { currentWeatherEP } from "../apiEndpoints.json";
import API from "./API";

const apiWeatherAuth = `${currentWeatherEP}appid=${process.env.REACT_APP_WEATHER_API_KEY}&lang=es&units=metric`;

export async function getWeatherByCityName(name) {
  const { data } = await API.get(`${apiWeatherAuth}&q=${name}`);
  return data;
}

// export async function getWeatherByCityID(id) {
//   const { data } = await API.get(`${apiWeatherAuth}&id=${id}`);
//   return data;
// }
