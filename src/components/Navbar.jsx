import { CiSearch } from "react-icons/ci";
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="input">
        <CiSearch className="search" />
      </div>
      <div className="inputList">
        <ul>
          <li>Categories</li>
          <li>Website Builders</li>
          <li>Today's deals</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
