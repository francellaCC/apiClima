import React from "react";
import useClima from "../hooks/useClima";
import {
  convertirMarcaDeTiempoAMomento,
  sensacionTermica,
  metrosAKilometros,
} from "../services/utilities";

function Resultado() {
  const { resultado } = useClima();
  const { name, main, wind, sys, weather } = resultado;
  //Grados kelvin
  const kelvin = 273.15;

  const windSpeed = metrosAKilometros(wind.speed);

  const feelsLike = sensacionTermica(main.feels_like, windSpeed);
  const sunriseTime = convertirMarcaDeTiempoAMomento(sys.sunrise);
  const sunsetTime = convertirMarcaDeTiempoAMomento(sys.sunset);
  const temp = parseInt(main.temp - kelvin);
  const tempMin = parseInt(main.temp_min - kelvin);
  const tempMax = parseInt(main.temp_max - kelvin);
  const iconClassName = `fa-thin fa-${weather[0].icon}`;

  
  return (
    <div className="contenedor clima">
      <div className="city_temp">
        <h2>{name}: </h2>
        <p>
          {" "}
          {temp} <span>&#x2103;</span>{" "}
        </p>
      </div>
      <i className={iconClassName}>{}</i>
      <div className="temp_min_max">
        <p>
          Minima: {tempMin} <span>&#x2103;</span>{" "}
        </p>
        <p>
          Maxima: {tempMax} <span>&#x2103;</span>{" "}
        </p>
      </div>

      <div className="others">
        <p>Humedad: {main.humidity}%</p>
        <p>
          Sensacion termica : {feelsLike} <span>&#x2103;</span>{" "}
        </p>

        <p>Viento: <span>{windSpeed}</span>  km/h</p>

        <p className="sunrise_sunset">Amanecer: <span >{sunriseTime}</span></p>
        <p className="sunrise_sunset">Atardecer: <span > {sunsetTime}</span></p>

        
      </div>
    </div>
  );
}

export default Resultado;
