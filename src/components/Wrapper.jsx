import Carddown from "./Carddown";
import Links from "./Links";
import MainCard from "./MainCard";
import Tree from "./Tree";
import Uppertag from "./Uppertag";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Uppertag />
      <Links />
      <Tree />
      <MainCard />
      <Carddown />
    </div>
  );
};

export default Wrapper;
