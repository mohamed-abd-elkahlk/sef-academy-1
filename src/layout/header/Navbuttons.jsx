import { NavLink } from "react-router-dom";

const Navbuttons = ({ to, value }) => {
  if (value === "CONTACT US") {
    return (
      <button className="border-amber-400 border-solid border-2 p-2 h-10 rounded-lg mt-10 hover:bg-amber-400 hover:text-black hover:border-none duration-300">
        <NavLink to={to}>{value}</NavLink>
      </button>
    );
  }
  return (
    <button>
      <NavLink
        className={({ isActive }) => {
          return isActive ? "border-b-2 border-amber-500" : "";
        }}
        to={to}
      >
        {value}
      </NavLink>
    </button>
  );
};

export default Navbuttons;
