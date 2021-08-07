import React, { Component } from "react";
import SearchBox from "./common/searchBox";
import { getWeatherByCityName } from "./../services/weatherService";
import CurrentWeatherGraphics from "./currentWeatherGraphics";
import "../css/weather.css";

class Weather extends Component {
  state = { weatherInfo: {}, isLoading: true, ciudadEncontrada: true };

  async componentDidMount() {
    const weatherInfo = this.formatWeatherData(
      await getWeatherByCityName("Capitan Sarmiento, AR")
    );
    if (weatherInfo) {
      this.setState({ weatherInfo, isLoading: false });
    }
  }

  handleSearch = async (query) => {
    this.setState({ isLoading: true });
    try {
      const weatherInfo = this.formatWeatherData(
        await getWeatherByCityName(query)
      );
      this.setState({ ciudadEncontrada: true, weatherInfo, isLoading: false });
    } catch (ex) {
      if (ex.response && ex.response.status === 404) {
        this.setState({ ciudadEncontrada: false, isLoading: false });
        console.log("Ciudad no encontrada");
      }
    }
  };

  formatWeatherData = (data) => {
    console.log(data);
    const {
      temp,
      humidity: humedad,
      pressure: presion,
      feels_like: sensTerm,
    } = data.main;
    const { name: ciudad, visibility: visibilidad } = data;
    const { speed: velViento, deg: dirViento } = data.wind;
    const { country: pais, sunrise, sunset } = data.sys;
    var date = new Date(0);
    date.setSeconds(data.dt + data.timezone);
    const hora = date.toISOString().substr(11, 5);
    date = new Date(0);
    date.setSeconds(sunrise + data.timezone);
    const amanecer = date.toISOString().substr(11, 5);
    date = new Date(0);
    date.setSeconds(sunset + data.timezone);
    const atardecer = date.toISOString().substr(11, 5);

    const clima = data.weather[0].main;
    const descripcion =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    const puntoRocio = temp - (100 - humedad) / 5;

    const dataReady = {
      ciudad: ciudad,
      pais: pais,
      hora: hora,
      temp: Math.round(temp),
      sensTerm: Math.round(sensTerm),
      clima: clima,
      descripcion: descripcion,
      humedad: humedad,
      puntoRocio: Math.round(puntoRocio),
      presion: presion,
      visibilidad: Math.round(visibilidad / 100) / 10,
      velViento: Math.round(velViento * 3.6),
      dirViento: dirViento,
      atardecer: atardecer,
      amanecer: amanecer,
    };

    return dataReady;
  };

  render() {
    const { isLoading, weatherInfo, ciudadEncontrada } = this.state;
    return (
      <React.Fragment>
        <SearchBox onSearch={this.handleSearch} />
        {!ciudadEncontrada && (
          <h5 className="errorFont">Ciudad no encontrada</h5>
        )}
        <CurrentWeatherGraphics info={weatherInfo} isLoading={isLoading} />
      </React.Fragment>
    );
  }
}

export default Weather;
