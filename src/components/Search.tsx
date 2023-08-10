import { useState } from "react";
import { SearchProps } from "../types/typeData";
import { BiSearchAlt2 } from "react-icons/bi";

const Search = ({ fetchData, inputRef }: SearchProps): JSX.Element => {
  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="container-input">
      <h3 className="mb-4 font-bold text-lg text-center">
        Veja o clima de uma cidade:
      </h3>
      <div className="input-container flex">
        <input
          ref={inputRef}
          className="p-2 border-none rounded flex-1 text-[#000000] focus:outline-none"
          type="text"
          name="inputValue"
          placeholder="Informe o nome da cidade"
          // value={inputValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInputValue(e.target.value)
          }
          onKeyDown={(e) =>
            e.key === "Enter" ? fetchData(inputValue && inputValue) : null
          }
        />
        <button
          onClick={() => fetchData(inputValue && inputValue)}
          className="p-2 min-w-[50px] ml-2 bg-[#78da88] text-[#fff] border-none cursor-pointer rounded flex justify-center items-center"
          id="search"
        >
          <i className="fa-solid fa-magnifying-glass text-xl">
            <BiSearchAlt2 />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Search;
