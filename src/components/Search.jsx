/** @format */
import { BsArrowRightShort } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex mt-8 pl-4 justify-between">
      <div className="flex-iniatial w-[170px] sm:w-[225px]">
        <h1 className=" font-extrabold text-dark-blue font-serif text-sm sm:text-xl ">
          Search results
        </h1>
        <p className="text-dark-blue font-normal text-xs sm:text-sm">
          We found 15 results
        </p>
        <div className="flex mt-8 mb-6">
          <h2 className=" text-dark-blue font-extrabold text-sm sm:text-2xl">
            London
          </h2>
          <BsArrowRightShort className="text-dark-blue" fontSize={24} />
          <h2 className=" text-dark-blue font-extrabold text-sm sm:text-xl">
            New York
          </h2>
        </div>
      </div>
      <div className="flex-1 w-auto">
        <div className="flex justify-evenly text-center">
          <div className="bg-white w-[55px] sm:w-[110px] p-2 rounded sm:rounded-3xl text-[8px] sm:text-sm text-dark-blue font-sans">
            CHEAPEST
          </div>
          <div className="bg-white w-[55px] sm:w-[110px] p-2 rounded sm:rounded-3xl text-[8px] sm:text-sm text-dark-blue font-sans">
            SHORTEST
          </div>
          <div className="bg-blue w-[60px] sm:w-[130px] p-2  font-light rounded sm:rounded-3xl text-[6px] sm:text-sm font-sans text-white">
            RECOMMENDED
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
