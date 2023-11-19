import Navbuttons from "./Navbuttons";

const SideNav = () => {
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
  return (
    <div className="buttons-holder flex text-white gap-4 flex-col w-[50%] mx-auto lg:hidden">
      <Navbuttons vlaue={"HOME"} />
      <Navbuttons vlaue={"ABOUT"} />
      {category.map((element) => (
        <Navbuttons vlaue={element.name} key={element.id} />
      ))}
      <Navbuttons vlaue={"CONTACT US"} />
    </div>
  );
};

export default SideNav;
