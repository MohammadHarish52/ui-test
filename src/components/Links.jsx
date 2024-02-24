import { links } from "../constants/Buttons";
const Links = () => {
  return (
    <div className="links">
      {links.map((btn) => {
        return (
          <div className="btn" key={btn.id}>
            <button>{btn.title}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Links;
