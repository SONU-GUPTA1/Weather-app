import axios from "axios";
import React, { useEffect, useState } from "react";
import ShowTemp from "./ShowTemp";

const Weather = () => {
  const [city, setCity] = useState("");
  const [data, setData] = useState({
    description: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    humidity: 0,
    sunrise: 0,
    sunset: 0,
    country: "",
  });

  const SubmitBtn = () => {
    // useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=631741ca1ba35d2e375c71987511849c`
      )
      .then((response) => {
        console.log(response.data);
        setData({
          description: response.data.weather[0].description,
          temp: response.data.main.temp,
          temp_max: response.data.main.temp_max,
          temp_min: response.data.main.temp_min,
          humidity: response.data.main.humidity,
          sunrise: response.data.sys.sunrise,
          sunset: response.data.sys.sunset,
          country: response.data.sys.country,
        });
      });
    // });
  };

  return (
    <>
      <div className="container text-centre my-2">
        <h1>Weather app in React Js</h1>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="button" class="btn btn-primary mx-2" onClick={SubmitBtn}>
          Get
        </button>
      </div>
      <ShowTemp text={data} />
    </>
  );
};

export default Weather;
