import React, { Component } from "react";
import SearchBox from "./common/searchBox";
import { getWeatherByCityName } from "./../services/weatherService";
import CurrentWeatherGraphics from "./currentWeatherGraphics";
import { toast } from "react-toastify";
import "../css/weather.css";

class Weather extends Component {
  state = { weatherInfo: {}, isSearching: false, ciudadEncontrada: true };

  async componentDidMount() {
    this.handleSearch("Capitan Sarmiento, AR");
  }

  handleSearch = async (query) => {
    this.setState({ isSearching: true });
    try {
      const weatherInfo = this.formatWeatherData(
        await getWeatherByCityName(query)
      );
      this.setState({
        weatherInfo,
        isSearching: false,
        ciudadEncontrada: true,
      });
    } catch (ex) {
      if (ex.response)
        if (ex.response.status === 404) {
          this.setState({ ciudadEncontrada: false });
          console.log("Ciudad no encontrada");
        } else {
          console.log("Error al contactar con el servidor");
          toast.error("Error al contactar con el servidor. Intente mas tarde.");
        }
      this.setState({ isSearching: false });
    }
  };

  formatWeatherData = (data) => {
    var date = new Date(0);
    date.setSeconds(data.dt + data.timezone);
    const hora = date.toISOString().substr(11, 5);
    date = new Date(0);
    date.setSeconds(data.sys.sunrise + data.timezone);
    const amanecer = date.toISOString().substr(11, 5);
    date = new Date(0);
    date.setSeconds(data.sys.sunset + data.timezone);
    const atardecer = date.toISOString().substr(11, 5);

    const clima = data.weather[0].main;
    const descripcion =
      data.weather[0].description.charAt(0).toUpperCase() +
      data.weather[0].description.slice(1);
    const puntoRocio = data.main.temp - (100 - data.main.humidity) / 5;

    const weatherInfo = {
      ciudad: data.name,
      pais: data.sys.country,
      hora: hora,
      temp: Math.round(data.main.temp),
      sensTerm: Math.round(data.main.feels_like),
      clima: clima,
      descripcion: descripcion,
      humedad: data.main.humidity,
      puntoRocio: Math.round(puntoRocio),
      presion: data.main.pressure,
      visibilidad: Math.round(data.visibility / 100) / 10,
      velViento: Math.round(data.wind.speed * 3.6),
      dirViento: data.wind.deg,
      atardecer: atardecer,
      amanecer: amanecer,
    };

    return weatherInfo;
  };

  render() {
    const { isSearching, weatherInfo, ciudadEncontrada } = this.state;
    return (
      <React.Fragment>
        <div className="container">
          <SearchBox onSearch={this.handleSearch} isSearching={isSearching} />
          {!ciudadEncontrada && !isSearching && (
            <h5 className="errorFont">Ciudad no encontrada</h5>
          )}
          <CurrentWeatherGraphics weatherInfo={weatherInfo} />
        </div>
      </React.Fragment>
    );
  }
}

export default Weather;
