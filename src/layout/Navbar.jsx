import { useState } from "react";
import logo from "../assets/Images/seff_logo_transparent.png";
import Dropdwon from "./header/Dropdwon";
import Navbuttons from "./header/Navbuttons";
import { AiOutlineMenu } from "react-icons/ai";
import SideNav from "./header/SideNav";
const Navbar = () => {
  const category = [
    {
      id: 1,
      name: "BUSINESS",
    },
    {
      id: 2,
      name: "SECURITY",
    },
    {
      id: 3,
      name: "SPORTS",
    },
    {
      id: 4,
      name: "MEDICAL",
    },
    {
      id: 5,
      name: "STARTUPS",
    },
    {
      id: 6,
      name: "APPS",
    },
    {
      id: 7,
      name: "JOPS",
    },
  ];
  const [nav, setNanv] = useState(false);
  const handleNav = () => {
    setNanv(!nav);
  };
  return (
    <div className="container">
      <AiOutlineMenu
        className="text-amber-500 text-xl cursor-pointer top-10 absolute right-4 z-[99] lg:hidden"
        onClick={handleNav}
      />
      <nav className="flex">
        <div className="logo mr-3">
          <img
            src={logo}
            alt=""
            className="w-[120px] h-[120px] rounded-[50%]"
          />
        </div>
        <div className="buttons-holder hidden  text-white sm:hidden md:hidden lg:gap-4 lg:flex xl:gap-8 ">
          <Navbuttons value="HOME" to="/" />
          <Navbuttons value="ABOUT" to="/about" />
          <Dropdwon />
          {category.map((element) => (
            <Navbuttons value={element.name} key={element.id} />
          ))}
          <Navbuttons value={"CONTACT US"} />
        </div>
      </nav>
      {nav ? <SideNav /> : ""}
    </div>
  );
};

export default Navbar;
