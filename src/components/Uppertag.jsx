import { CiCircleCheck } from "react-icons/ci";
import { CiCircleInfo } from "react-icons/ci";
import { IoChevronDownSharp } from "react-icons/io5";

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
            <CiCircleCheck
              size={20}
              style={{
                marginRight: "8px",
              }}
            />{" "}
            Last updated - February 22, 2020
          </div>
          <div className="advertising">
            <CiCircleInfo
              size={20}
              style={{
                marginRight: "8px",
              }}
            />{" "}
            Advertising Disclosure
          </div>
        </div>
        <div className="right">
          Top relevant{" "}
          <IoChevronDownSharp
            style={{
              marginLeft: "8px",
              fontWeight: "bold",
            }}
          />
        </div>
      </div>
      <hr />
    </div>
  );
};

export default Uppertag;
