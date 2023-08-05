/** @format */
import { BsArrowRightShort } from "react-icons/bs";

const Search = () => {
  return (
    <div className="flex mt-8 pl-4 justify-between">
      <div className="flex-iniatial w-[225px]">
        <h1 className=" font-extrabold text-dark-blue font-serif text-xl ">
          Search results
        </h1>
        <p className="text-dark-blue font-normal text-sm">
          We found 15 results
        </p>
        <div className="flex mt-8 mb-6">
          <h2 className=" text-dark-blue font-extrabold text-2xl">London</h2>
          <BsArrowRightShort className="text-dark-blue" fontSize={36} />
          <h2 className=" text-dark-blue font-extrabold text-xl">New York</h2>
        </div>
      </div>
      <div className="flex-1 w-auto">
        <div className="flex justify-evenly text-center">
          <div className="bg-white w-[110px] p-2  rounded-3xl text-sm text-dark-blue font-sans">
            CHEAPEST
          </div>
          <div className="bg-white w-[110px] p-2  rounded-3xl text-sm text-dark-blue font-sans">
            SHORTEST
          </div>
          <div className="bg-blue w-[130px] p-2  font-light rounded-3xl text-sm font-sans text-white">
            RECOMMENDED
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
