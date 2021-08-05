import React, { Component } from "react";
import SearchBox from "./common/searchBox";
import {
  getWeatherByCityName,
  getWeatherByCityID,
} from "./../services/weatherService";

class Weather extends Component {
  state = { searchQuery: "" };

  async componentDidMount() {}

  handleSearchChange = (query) => {
    this.setState({
      searchQuery: query,
    });
  };

  handleWeatherSearch = () => {};

  render() {
    console.log(getWeatherByCityName("London"));
    const { searchQuery } = this.state;
    return <SearchBox value={searchQuery} onChange={this.handleSearchChange} />;
  }
}

export default Weather;
