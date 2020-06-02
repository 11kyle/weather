import React, { Component } from 'react';
import Current from './Components/Weather/Current';
import { Grid } from '@material-ui/core';

const axios = require('axios');

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      openWeather: {
        key: "30338f8886c8b529293d7830f91f7dbe",
        lat: "39.7382",
        lon: "-104.9903",
        exclude: "minutely, hourly", // current, minutely, hourly, daily
        unit: "imperial", // imperial, metric
      },
      loading: true,
      weatherData: {},
    }
  }

  componentDidMount() {
    this.getWeather();
  }

  getWeather = () => {
    axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${this.state.openWeather.lat}&lon=${this.state.openWeather.lon}&units=${this.state.openWeather.unit}&exclude=${this.state.openWeather.exclude}&appid=${this.state.openWeather.key}`)
      .then(response => {
        this.setState({
          weatherData: response.data,
          loading: false
        });
      })
      .catch(error => {
        console.log(`Error: ${error}`);
      })
  }

  // https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={YOUR API KEY}
  
  render() {
    return (
      <Grid container
        justify="center"
      >
        {
          (this.state.loading)
          ? <p>Loading...</p>
          : <Current weather={this.state.weatherData} />
        }
      </Grid>
    );
  }
}
