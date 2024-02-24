import Carddown from "./Carddown";
import Links from "./Links";
import Tree from "./Tree";
import Uppertag from "./Uppertag";

const Wrapper = () => {
  return (
    <div className="wrapper">
      <Uppertag />
      <Links />
      <Tree />
      <Carddown />
    </div>
  );
};

export default Wrapper;
