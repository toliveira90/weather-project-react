import React, { useState } from "react";
import axios from "axios";
import dateFormat from "dateformat";
import WeatherIcons from "./WeatherIcons";
import Dates from "./Dates";
import Temperatures from "./Temperatures";
import "./Weather.css"


export default function SearchEngine() {
  let [city, setCity] = useState("");
  let [temperature, setTemperature] = useState("");
  let [description, setDescription] = useState("");
  let [humidity, setHumidity] = useState("");
  let [speed, setSpeed] = useState("");
  let [icon, setIcon] = useState("");
  
  function handleSubmit(event){
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7511873474dcd0a7a6ab23240ca6b9ec&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function SearchCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) 
  {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setSpeed(response.data.wind.speed);
    setIcon(
      `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );

    let dateFormat = require("dateformat");
    let now = new Date(response.data.dt *1000);
    dateFormat(now);
    }
  let form = (
    <div className="container">
        <form className="row mt-5" onSubmit={handleSubmit}>
            <input className="col-6 ms-5" type="text" placeholder="Enter a city" onChange={SearchCity}/>
            <input className="col-2 btn-primary ms-2 me-2 searchButton btn-sm" type="submit" value="Search" />
            <input className="col-2 btn-success btn-sm currentButton" type="submit" value="Current"/>
        </form>
    </div>
  );
  if (temperature) {
    return (
      <div>
        {form}
        <ul className="results">
          <li className="city"> {city} </li>
          <li>Last Updated : {dateFormat()}</li>
          <li>Description: {description}</li>
          <li></li>
          <li> <span> <img src={icon} alt={description}/> </span> {Math.round(temperature)}ºC <span>Humidity: {humidity}%</span> <span>Speed: {speed}km/h</span></li>
        </ul>
        <div className="dayNames"><Dates /></div>
        <div className="dailyForecast ms-5 ps-3"><span className=""><WeatherIcons icon="CLOUDY" color="black"/></span><span className=""><WeatherIcons icon="CLEAR_DAY" color="black"/></span><span className=""><WeatherIcons icon="RAIN" color="black"/></span><span className=""><WeatherIcons icon="RAIN" color="black"/></span><span className=""><WeatherIcons icon="CLOUDY" color="black"/></span> </div>
        <div className="dailyTemperatures"><Temperatures /></div>
      </div>
    );
  } else {
    return form;
  }
}

