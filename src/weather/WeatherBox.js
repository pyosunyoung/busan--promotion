import React from "react";
import { Card } from "react-bootstrap";

const WeatherBox = ({ weather }) => {
  const temperatureC =
    weather && weather.main ? (weather.main.temp - 273.15).toFixed(2) : "";
  const temperatureF =
    weather && weather.main
      ? (((weather.main.temp - 273.15) * 9) / 5 + 32).toFixed(2)
      : "";
  // const icon = weather.weather[0].icon;
  return (
    <Card className="weather-card">
      {/* <Card.Img src="holder.js/100px270" alt="Card image" /> */}
      <Card.ImgOverlay className="d-flex flex-column justify-content-center text-center">
        <Card.Title style={{color:"white"}}>
        {/* <img className="img-fluid" src={`http://openweathermap.org/img/wn/${icon}@4x.png`} alt="Weather icon" /> */}
          {weather?.name || '날씨를 가져오는데 실패했습니다.'} Weather</Card.Title>
        <Card.Text className="text-danger h1">
          {`${temperatureC} °C / ${temperatureF} °F`}
        </Card.Text>
        <Card.Text className="text-info text-uppercase h2">
          {weather && weather.weather[0]?.description}
        </Card.Text>
      </Card.ImgOverlay>
    </Card>
  );
};

export default WeatherBox;