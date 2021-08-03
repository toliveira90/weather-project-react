import ReactAnimatedWeather from "react-animated-weather";

const defaults = {
  icon: "CLEAR_DAY",
  color: "goldenrod",
  size: 50,
  animate: true
};

const WeatherIcons = (props) => (
  <ReactAnimatedWeather
    icon={props.icon}
    color={props.color}
    size={defaults.size}
    animate={defaults.animate}
  />
);

export default WeatherIcons;








