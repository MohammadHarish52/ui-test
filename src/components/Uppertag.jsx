import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { FaAngleDown } from "react-icons/fa";

const Uppertag = () => {
  return (
    <div className="uppertag">
      <div className="headline">
        <h1>Best Website Builder in the US</h1>
      </div>
      <hr />
      <div className="dates">
        <div className="left">
          <div className="last">
            {" "}
            <CiCircleCheck size={20} /> last updated - February 20, 2023
          </div>
          <div className="advertising">
            <CiCircleInfo size={20} /> Advertising Disclosure
          </div>
        </div>
        <div className="right">
          Top relevant <FaAngleDown />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Uppertag;
