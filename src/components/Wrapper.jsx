import Carddown from "./Carddown";
import Links from "./Links";
import MainCard from "./MainCard";
import Second from "./Second";
import SignUp from "./SignUp";
import Tree from "./Tree";
import Uppertag from "./Uppertag";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Uppertag />
      <Links />
      <Tree />
      <MainCard />
      <Second />
      <Carddown />
      <SignUp />
    </div>
  );
};

export default Wrapper;
