import { currentWeatherEP } from "../apiEndpoints.json";
import API from "./API";
const config = require("../config.json");

const apiWeatherAuth = `${currentWeatherEP}appid=${config.apiKey}&lang=es&units=metric`;

export async function getWeatherByCityName(name) {
  const { data } = await API.get(`${apiWeatherAuth}&q=${name}`);
  return data;
}

// export async function getWeatherByCityID(id) {
//   const { data } = await API.get(`${apiWeatherAuth}&id=${id}`);
//   return data;
// }
