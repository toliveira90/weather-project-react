import React, { useState } from "react";
import axios from "axios";
import WeatherIcons from "./WeatherIcons";
import Dates from "./Dates";
import Temperatures from "./Temperatures";
import FormatDate from "./FormatDate";
import 'bootstrap/dist/css/bootstrap.css';
import "./Weather.css"

export default function SearchEngine() {
  let [city, setCity] = useState("Barcelona");
  let [WeatherData, setWeatherData] = useState({ready: false});
  
  function Search() {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=7511873474dcd0a7a6ab23240ca6b9ec&units=metric`;
    axios.get(url).then(showTemperature);
  }
  function handleSubmit(event){
    event.preventDefault()
    Search();
  }
  function SearchCity(event) {
    setCity(event.target.value);
  }
  function showTemperature(response) 
  {
    setWeatherData({
      ready:true,
      city:response.data.name,
      temperature: response.data.main.temp,
      date:(new Date(response.data.dt * 1000)),
      description: response.data.weather[0].description,
      humidity:response.data.main.humidity,
      speed:response.data.wind.speed,
      icon:<WeatherIcons code={response.data.weather[0].icon}/>
    });
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
  let dailyForecast =(<div>
    <div className="dayNames"><Dates /></div>
    <div className="dailyTemperatures"><Temperatures /></div>
    </div>);
  if (WeatherData.ready) {
    return (<div>
      {form}
      <div className="WeatherForecast">
        <div className="Weather">
    <ul className="results">
      <li className="city"> {WeatherData.city} <br /> <span> {WeatherData.icon}</span><span className="ms-2 temperature">{Math.round(WeatherData.temperature)}</span><span className="unit">ºC </span> </li>
      <li className="dateFormat"><FormatDate date={WeatherData.date}/></li>
      <li className="text-capitalize">Description: {WeatherData.description}</li>
      <li></li>
      <li>  <span>Humidity: {WeatherData.humidity}%</span> <span>Speed: {WeatherData.speed}km/h</span></li>
    </ul>
  </div>
    </div>
      {dailyForecast}
      </div>
    );
  } else {
    return (<div> <div className="mb-5">{form} {Search()}</div>{dailyForecast}</div>
    );
  }
}