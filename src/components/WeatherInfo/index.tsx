import "./weatherInfo.css";

const WeatherInfo = ({ info }) => {
  return (
    <div className="weather-info">
      {info && info.WeatherText && info.Temperature && (
        <>
          <h2>{info.WeatherText}</h2>
          <h3>
            Metric: {info.Temperature.Metric.Value}
            {info.Temperature.Metric.Unit}
          </h3>
          <h3>
            Imperial: {info.Temperature.Imperial.Value}
            {info.Temperature.Imperial.Unit}
          </h3>
        </>
      )}
    </div>
  );
};

export default WeatherInfo;
