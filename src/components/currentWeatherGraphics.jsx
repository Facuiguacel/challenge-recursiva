import React from "react";
import WeatherIcon from "./common/weatherIcon";

const CurrentWeatherGraphics = ({ weatherInfo: info }) => {
  if (info.ciudad) {
    return (
      <div>
        <h3 className="mt-4">
          {info.ciudad}, {info.pais}
        </h3>
        <h5>Hoy {info.hora}</h5>
        <WeatherIcon weather={info.clima} />
        <h3>{info.descripcion}</h3>
        <h1>{info.temp} °C</h1>
        <h4>Sensacion termica de {info.sensTerm} °C</h4>
        <h5 className="mt-4">Humedad: {info.humedad}%</h5>
        <h5>Punto de rocio: {info.puntoRocio} °C</h5>
        <h5>Presion Atmosferica: {info.presion} mbar</h5>
        <h5>Visibilidad: {info.visibilidad} km </h5>
        <h5>Viento: {info.velViento} km/h</h5>
        <h5>Direccion viento: {info.dirViento}</h5>
        <h5>Salida del sol: {info.amanecer}</h5>
        <h5>Puesta del sol: {info.atardecer}</h5>
      </div>
    );
  } else return <h1>X</h1>; //Cambiar por spinner o algo parecido
};

export default CurrentWeatherGraphics;
