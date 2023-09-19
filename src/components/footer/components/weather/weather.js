import { useEffect, useState } from "react";
import styled from "styled-components";

const WeatherContainer = ({ className }) => {
  const [weather, setWeather] = useState("");
  const [city, setCity] = useState("");
  const [temp, setTemp] = useState("");

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=moscow&lang=ru&units=metric&appid=e3d189f7db1b726b9ed6964cbef557c3`
    )
      .then((res) => res.json())
      .then(({ main, name, weather }) => {
        setTemp(Math.round(main.temp));
        setCity(name);
        setWeather([weather[0].description, weather[0].icon]);
      });
  }, []);
  return (
    <div className={className}>
      <div className="city">{city}</div>
      <div className="weather-info">
        {temp}º {weather[0]}
      </div>
    </div>
  );
};

export const Weather = styled(WeatherContainer)`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
