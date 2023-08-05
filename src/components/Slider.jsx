/** @format */

import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const Slider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === images.length ? 0 : prevIndex + 1
    );
  };
  const handlePrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? images.length - 1 : prevIndex - 1
    );
  };
  const handleDotClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <div className="relative  overflow-hidden h-96 m-auto max-w-md">
      <img
        key={currentIndex}
        src={images[currentIndex]}
        alt=""
        className="rounded-lg"
      />
      <div className="flex justify-between">
        <div
          className=" bg-dark-gray rounded-md h-6 w-6 absolute top-24 bottom-20  mt-10 mb-0"
          onClick={handlePrevious}
        >
          <BiChevronLeft fontSize={24} />
        </div>
        <div
          className=" bg-dark-gray rounded-md h-6 w-6 absolute top-32 mt-3 ml-10 left-96"
          onClick={handleNext}
        >
          <BiChevronRight fontSize={24} />
        </div>
      </div>
      <div className="mt-5 flex justify-center gap-5">
        {images.map((_, index) => (
          <div
            key={index}
            className={` " w-4 h-4 rounded-full " ${
              currentIndex === index ? " bg-blue " : " bg-slate-600"
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};
export default Slider;
