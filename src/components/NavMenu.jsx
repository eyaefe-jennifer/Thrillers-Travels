/** @format */

import { useState } from "react";
import { MdFlight, MdTrain } from "react-icons/md";
import { FaShip, FaCar } from "react-icons/fa";
import FormField from "./FormField";

const NavMenu = () => {
  const [clicked, setClicked] = useState(1);
  const handleClicked = (index) => {
    setClicked(index);
    console.log(index);
  };

  return (
    <div className="">
      <div className="flex flex-row text-center cursor-pointer">
        <div
          className={
            clicked === 1
              ? "bg-green-800 w-[120px] h-16 text-white shadow-md shadow-dark-blue"
              : "w-[120px] h-16 bg-white text-dark-blue"
          }
          onClick={() => handleClicked(1)}
        >
          <MdFlight className=" ml-10 mt-2 " />
          <h2 className=" pt-1">Flight</h2>
        </div>
        <hr className="border-0 p-px"></hr>
        <div
          className={
            clicked === 2
              ? "bg-green-800 w-[120px] h-16 text-white shadow-md shadow-blue "
              : "w-[120px] h-16 bg-white text-dark-blue"
          }
          onClick={() => handleClicked(2)}
        >
          <MdTrain className=" ml-10 mt-2" />
          <h2 className=" pt-1">Train</h2>
        </div>
        <hr className="border-0 p-px"></hr>
        <div
          className={
            clicked === 3
              ? "bg-green-800 w-[120px] h-16 text-white shadow-md shadow-blue"
              : " w-[120px] h-16 bg-white text-dark-blue"
          }
          onClick={() => handleClicked(3)}
        >
          <FaShip className=" ml-10 mt-2" />
          <h2 className=" pt-1">Ship</h2>
        </div>
        <hr className="border-0 p-px"></hr>
        <div
          className={
            clicked === 4
              ? "bg-green-800 w-[120px] h-16  text-white shadow-md shadow-blue "
              : "w-[120px] h-16 bg-white text-dark-blue"
          }
          onClick={() => handleClicked(4)}
        >
          <FaCar className=" ml-10 mt-2" />
          <h2 className=" pt-1">Cars</h2>
        </div>
      </div>
      <div className="content pl-8">
        <div className={clicked === 1 ? "block" : "hidden"}>
          <h3 className=" text-dark-blue font-semibold text-lg mt-4">
            Best flight deals with
          </h3>
          <h2 className="text-blue font-bold text-lg">Tickets4U</h2>
          <FormField />
        </div>
        <div className={clicked === 2 ? "block" : "hidden"}>
          <h3 className=" text-dark-blue font-semibold text-lg mt-4">
            Best Train deals with
          </h3>
          <h2 className="text-blue font-bold text-lg">Tickets4U</h2>
          <FormField />
        </div>
        <div className={clicked === 3 ? "block" : "hidden"}>
          <h3 className=" text-dark-blue font-semibold text-lg mt-4">
            Best Ship deals with
          </h3>
          <h2 className="text-blue font-bold text-lg">Tickets4U</h2>
          <FormField />
        </div>
        <div className={clicked === 4 ? "block" : "hidden"}>
          <h3 className=" text-dark-blue font-semibold text-lg mt-4">
            Best Car deals with
          </h3>
          <h2 className="text-blue font-bold text-lg">Tickets4U</h2>
          <FormField />
        </div>
      </div>
    </div>
  );
};
export default NavMenu;
