import React from "react";
import sunny from "../../include/img/weather_icons/sunny.png";
import cloud from "../../include/img/weather_icons/cloud.png";
import rain from "../../include/img/weather_icons/rain.png";
import snowy from "../../include/img/weather_icons/snowy.png";
import thunderstorm from "../../include/img/weather_icons/thunderstorm.png";
import tornado from "../../include/img/weather_icons/hurricane.png";
import mist from "../../include/img/weather_icons/mist.png";
import placeholder from "../../include/img/weather_icons/placeholder.png";

const WeatherIcon = ({ weather }) => {
  switch (weather) {
    case "Clear":
      return <img src={sunny} alt="" />;
    case "Clouds":
      return <img src={cloud} alt="" />;
    case "Rain":
      return <img src={rain} alt="" />;
    case "Snow":
      return <img src={snowy} alt="" />;
    case "Thunderstorm":
      return <img src={thunderstorm} alt="" />;
    case "Drizzle":
      return <img src={rain} alt="" />;
    case "Tornado":
      return <img src={tornado} alt="" />;
    case "Mist":
      return <img src={mist} alt="" />;
    default:
      return <img src={placeholder} alt="" />;
  }
};

export default WeatherIcon;
