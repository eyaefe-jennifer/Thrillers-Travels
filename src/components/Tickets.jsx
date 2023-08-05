/** @format */

import NavMenu from "./NavMenu";
import Search from "./Search";
import Slider from "./Slider";
// import images from "../slider";

import { images } from "../slider";

const Tickets = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row pt-10 px-40">
        <div className="flex-initial w-[26rem] h-auto rounded bg-light-blue rounded-r-none">
          <h2 className=" font-bold p-5 text-blue">Tickets4U</h2>
          <NavMenu />
        </div>
        <hr className="border-0 p-px"></hr>
        <div className="flex-1 w-[26rem] sm:w-auto bg-dim-blue rounded-l-none rounded">
          <Search />
          <Slider images={images} />
        </div>
      </div>
    </div>
  );
};
export default Tickets;
