import { MessageError, typeData } from "../types/typeData";
import { TfiLocationPin } from "react-icons/tfi";
import { WiHumidity } from "react-icons/wi";
import { FiWind } from "react-icons/fi";

const Elements = ({
  name,
  country,
  temp,
  humidity,
  description,
  icon,
  speed,
  errorMessage,
}: typeData & MessageError): JSX.Element => {
  return (
    <div className="weather-data flex flex-col gap-4 border-solid border-t-2 border-[#fff] mt-6 text-center">
      <h2 className="flex justify-center items-center mb-1 mt-4 gap-2">
        <span className="text-xl font-extrabold">
          <TfiLocationPin />
        </span>
        <span className="city mr-3 text-xl">{name}</span>
        <img
          //  crossOrigin="anonymous"
          src={country ? `https://flagsapi.com/${country}/flat/64.png` : ""}
          //  src={`${cApi}${dados?.sys?.country}`}
          id="country"
        />
      </h2>
      <p className="temperature text-5xl">
        <span>{temp.toFixed()}</span>&deg;C
      </p>
      <div className="description-container flex justify-center items-center mt-2 mb-0">
        <p id="description">{description}</p>
        <img
          src={icon ? `http://openweathermap.org/img/wn/${icon}.png` : ""}
          alt={icon ? "Condição do tempo" : ""}
          id="weather-icon"
          crossOrigin="anonymous"
        />
      </div>
      <div className="details-container flex justify-center items-center gap-6">
        <p className="humidity flex justify-center items-center gap-1">
          Humidade:
          <span className="text-xl font-extrabold">
            <WiHumidity />
          </span>
          <span>{humidity}</span>
        </p>
        <p className="wind flex justify-center items-center gap-1">
          Vento KM:
          <span className="text-xl font-extrabold">
            <FiWind />
          </span>
          <span>{speed.toFixed()}</span>
        </p>
      </div>
    </div>
  );
};

export default Elements;
