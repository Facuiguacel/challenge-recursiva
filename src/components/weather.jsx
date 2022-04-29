import React, { Component } from "react";
import SearchBox from "./common/searchBox";
import { getWeatherByCityName } from "./../services/weatherService";
import WeatherGraphics from "./common/weatherGraphics";
import { toast } from "react-toastify";
import "../include/css/weather.css";
import { Container } from "react-bootstrap";

class Weather extends Component {
  state = { weatherInfo: {}, isSearching: false, ciudadEncontrada: true };

  async componentDidMount() {
    this.handleSearch("Capitan Sarmiento, AR");
  }

  handleSearch = async (query) => {
    this.setState({ isSearching: true });
    try {
      const weatherInfo = this.formatWeatherData(await getWeatherByCityName(query));
      this.setState({ weatherInfo, ciudadEncontrada: true });
    } catch (ex) {
      if (ex.response)
        if (ex.response.status === 404) {
          this.setState({ ciudadEncontrada: false });
        } else {
          toast.error("Error al contactar con el servidor. Intente mas tarde.");
        }
    }
    this.setState({ isSearching: false });
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
    const descripcion = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
    const puntoRocio = data.main.temp - (100 - data.main.humidity) / 5;
    const clima =
      data.weather[0].main === "Clear" && (data.dt < data.sys.sunrise || data.dt > data.sys.sunset)
        ? "ClearNight"
        : data.weather[0].main;

    var dirViento = "";
    const brujula = ["norte", "noreste", "este", "sudoeste", "sur", "sudoeste", "oeste", "noroeste", "norte"];

    // Parsea la direccion del viento de grados a sus respectivo rango de la rosa de los vientos (norte, sur, este, oeste, etc.)
    var cont = 0;
    for (let i = 0; i <= 360; i += 45) {
      if (data.wind.deg - i < 22.5 && data.wind.deg - i > -22.5) {
        dirViento = brujula[cont];
      }
      cont++;
    }

    const weatherInfo = {
      ciudad: data.name,
      pais: data.sys.country,
      hora,
      temp: Math.round(data.main.temp),
      sensTerm: Math.round(data.main.feels_like),
      clima,
      descripcion,
      humedad: data.main.humidity,
      puntoRocio: Math.round(puntoRocio),
      presion: data.main.pressure,
      visibilidad: Math.round(data.visibility / 100) / 10,
      velViento: Math.round(data.wind.speed * 3.6),
      dirViento,
      atardecer,
      amanecer,
    };

    return weatherInfo;
  };

  render() {
    const { isSearching, weatherInfo, ciudadEncontrada } = this.state;
    return (
      <React.Fragment>
        <Container style={{ maxWidth: "552px", minWidth: "330px" }}>
          <SearchBox onSearch={this.handleSearch} isSearching={isSearching} />
          {!ciudadEncontrada && !isSearching && <div className="errorFont">Ciudad no encontrada</div>}
          <WeatherGraphics weatherInfo={weatherInfo} />
          <p className="softText">
            Aplicación creada con React.js en 3 dias (aprox. 8hs de trabajo) como parte del desafío de una entrevista
            laboral. Para obtener los datos del clima utiliza la API de{" "}
            <a href="https://openweathermap.org/api">OpenWeather</a>.
            <br style={{ marginBottom: 5 }} />
            Desarrolada por <a href="https://facuiguacel.vercel.app">Facundo Iguacel</a>
          </p>
        </Container>
      </React.Fragment>
    );
  }
}

export default Weather;
