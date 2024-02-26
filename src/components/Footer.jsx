import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  return (
    <div className="footer">
      <div className="info">
        <div className="categories">
          <h2>Categories</h2>
          <ul>
            <li>Web builder</li>
            <li>Hosting</li>
            <li>Data Center</li>
            <li>Robotic-Automation</li>
          </ul>
        </div>
        <div className="contact">
          <h2>Contact</h2>
          <ul>
            <li>Contact </li>
            <li>Privacy policy</li>
            <li>Terms of Service</li>
            <li>Categories</li>
            <li>About</li>
          </ul>
        </div>
      </div>
      <div className="us">
        <h1>Unites states</h1>
        <IoIosArrowDown className="arrow_down" />
      </div>
    </div>
  );
};

export default Footer;
