export type typeData = {
  name: string;
  country: string;
  temp: number;
  humidity: number;
  description: string;
  icon: string;
  speed: number;
};

export type SearchProps = {
  apiKey: string;
  fetchData: (inputValue: string) => Promise<void>;
  inputRef: React.RefObject<HTMLInputElement>;
};
