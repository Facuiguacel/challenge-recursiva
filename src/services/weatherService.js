import http from "../services/httpService";
import { apiEndpoint, apiWeather, apiKey } from "../config.json";

const apiWeatherKey = apiWeather + "appid=" + apiKey;

export function getWeatherByCityName(cityName) {
  return http.get(`${apiWeatherKey}&q=${cityName}`);
}

export function getWeatherByCityID(id) {
  return http.get(`${apiWeatherKey}&id=${id}`);
}
