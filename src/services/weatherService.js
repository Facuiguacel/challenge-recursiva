import { currentWeatherEP, apiKey } from "../apiEndpoints.json";
import API from "./API";

const apiWeatherAuth = `${currentWeatherEP}appid=${apiKey}&lang=es&units=metric`;

export async function getWeatherByCityName(name) {
  const { data } = await API.get(`${apiWeatherAuth}&q=${name}`);
  return data;
}

export async function getWeatherByCityID(id) {
  const { data } = await API.get(`${apiWeatherAuth}&id=${id}`);
  return data;
}
