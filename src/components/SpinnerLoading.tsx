import { BiLoaderCircle } from "react-icons/bi";
const SpinnerLoading = () => {
  return (
    <div className="loader relative text-center pt-6 pb-4 text-2xl">
      <i className="loader-rotate absolute">
        <BiLoaderCircle />
      </i>
    </div>
  );
};

export default SpinnerLoading;
