import { MessageError } from "../types/typeData";

const ErrorMessage = ({ errorMessage }: MessageError) => {
  return (
    <div className="error-message border-t-2 border-solid border-[#fff] mt-5 pt-4 text-center">
      <p className="text-justify">{errorMessage}</p>
    </div>
  );
};

export default ErrorMessage;
