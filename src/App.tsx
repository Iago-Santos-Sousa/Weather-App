import { useState, useRef } from "react";
import "./App.css";
import { typeData } from "./types/typeData";
import myApiKey from "./components/apiKey";
import Elements from "./components/Elements";
import Search from "./components/Search";
import ErroMessage from "./components/ErrorMessage";
import SpinnerLoading from "./components/SpinnerLoading";
import Tooltip from "./components/Tooltip";

function App() {
  const [apiData, setApiData] = useState<typeData | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [error, setError] = useState<boolean | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchData = async (inputValue: string): Promise<void> => {
    setLoader(true);

    try {
      const fetchDataApi = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${myApiKey}&lang=pt_br`;
      const response = await fetch(fetchDataApi);
      const data = await response.json();

      const {
        name,
        sys: { country },
        main: { temp, humidity },
        weather: [{ description, icon }],
        wind: { speed },
      } = data;

      const allData: typeData = {
        name,
        country,
        temp,
        humidity,
        description,
        icon,
        speed,
      };
      setApiData(allData);
      setError(null);
      setLoader(false);
      inputRef.current?.focus();
      inputRef.current && (inputRef.current.value = ""); // Limpar o valor do input
    } catch (error) {
      setError(true);
      setApiData(null);
      setLoader(false);
      console.log("Erro", error);
    }
  };

  return (
    <div className="App bg-customizeBackground p-8 rounded-2xl text-[#fdfdfd] max-w-[400px] myBoxShadow">
      <Search apiKey={myApiKey} fetchData={fetchData} inputRef={inputRef} />
      {loader && <SpinnerLoading />}
      {apiData && (
        <Elements
          name={apiData.name}
          country={apiData.country}
          temp={apiData.temp}
          humidity={apiData.humidity}
          description={apiData.description}
          icon={apiData.icon}
          speed={apiData.speed}
        />
      )}
      {error && <ErroMessage />}
      <Tooltip />
    </div>
  );
}

export default App;
