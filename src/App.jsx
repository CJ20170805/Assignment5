import "./mvp.css";
import "./styles.css";
import SearchBar from "./components/SearchBar/index";
import WeatherInfo from "./components/WeatherInfo";
import { useState } from "react";

export default function App() {
  const [info, setInfo] = useState([]);

  const setWeatherInfo = (info) => {
    setInfo(info);
  };

  return (
    <div className="App">
      <SearchBar setWeatherInfo={setWeatherInfo} />
      <WeatherInfo info={info} />
    </div>
  );
}
