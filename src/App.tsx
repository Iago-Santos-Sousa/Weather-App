import { useState, useRef } from "react";
import "./App.css";
import { typeData } from "./types/typeData";
import myApiKey from "./apiKey";
import Elements from "./components/Elements";
import Search from "./components/Search";
import ErrorMessage from "./components/ErrorMessage";
import SpinnerLoading from "./components/SpinnerLoading";

function App() {
  const [apiData, setApiData] = useState<typeData | null>(null);
  const [loader, setLoader] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchData = async (inputValue: string | null): Promise<void> => {
    // console.log(inputValue);
    // console.log(apiData);
    if (inputValue === "") {
      inputValue = null;
      setApiData(null);
      console.log("input esta vazio");
      console.log(inputRef.current?.value);
      setLoader(false);
      setErrorMessage("Insira um nome de uma cidade...");
      return;
    }
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
      setErrorMessage(false);
      setLoader(false);
      inputRef.current?.focus();
      //inputRef.current && (inputRef.current.value = ""); // Limpar o valor do input
      inputValue = null;
    } catch (error) {
      setErrorMessage("Não foi possível achar a cidade com esse nome...");
      inputValue = null;
      inputRef.current && (inputRef.current.value = "");
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
          errorMessage={errorMessage}
        />
      )}
      {errorMessage && <ErrorMessage errorMessage={errorMessage} />}
    </div>
  );
}

export default App;
