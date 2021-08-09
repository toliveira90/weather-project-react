import React, {useState} from "react";
import "./Weather.css";

export default function TemperatureUnit(props){
    const [unit, setUnit] = useState("celcius");
    function convertToFahrenheit(event){
        event.preventDefault();
        setUnit("fahrenheit");
    }
    function convertToCelcius(event){
        event.preventDefault();
        setUnit("celcius");
    }
    if(unit === "celcius"){
    return (<div className="TemperatureUnit">
        <span className="ms-2 temperature">
            {Math.round(props.celcius)}
        </span>
        <span className="unit">
            <a href="/" onClick={convertToCelcius}>ºC</a> | <a href="/" onClick={convertToFahrenheit}>ºF</a>
        </span> 
    </div>);
} else {
    return (<div className="TemperatureUnit">
        <span className="ms-2 temperature">
            {Math.round(props.celcius * 9 / 5 + 32)}
        </span>
        <span className="unit">
            <a href="/" onClick={convertToCelcius}>ºC</a> | <a className="fahrenheit" href="/" onClick={convertToFahrenheit}>ºF</a>
        </span> 
    </div>);
}
}