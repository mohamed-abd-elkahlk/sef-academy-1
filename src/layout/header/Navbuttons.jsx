import { Link } from "react-router-dom";
const Navbuttons = ({ to, value }) => {
  if (value === "CONTACT US") {
    return (
      <button className="border-amber-400 border-solid border-2 p-2 h-10 rounded-lg mt-10 hover:bg-amber-400 hover:text-black hover:border-none duration-300">
        <Link to={to}>{value}</Link>
      </button>
    );
  }
  return (
    <button>
      <Link to={to}>{value}</Link>
    </button>
  );
};

export default Navbuttons;
