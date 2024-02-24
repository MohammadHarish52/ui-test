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
            <CiCircleCheck /> last updated - February 20, 2023
          </div>
          <div className="advertising">
            <CiCircleInfo /> Advertising Disclosure
          </div>
        </div>
        <div className="right">
          Top relevant <FaAngleDown />
        </div>
      </div>
    </div>
  );
};

export default Uppertag;
