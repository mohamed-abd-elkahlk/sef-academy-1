import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const DropdwonSide = () => {
  const [option, setOption] = useState(false);
  const [value, setValue] = useState("TECH");
  const handleOptions = () => {
    setOption(!option);
  };
  return (
    <div className="dropDown mx-auto">
      <button className="flex gap-3 items-center " onClick={handleOptions}>
        {value}
        <IoIosArrowDown />{" "}
      </button>
      {option ? (
        <div className="drop-down-elements flex flex-col gap-4  bg-[#0a0a0a11]">
          <button
            className="pr-20 pl-2 text-left p-1  hover:bg-amber-500"
            onClick={() => {
              setValue("LAPTOPS");
              setOption(!option);
            }}
          >
            LAPTOPS
          </button>
          <button
            className="pr-20 pl-2 text-left p-1  hover:bg-amber-500"
            onClick={() => {
              setValue("PHONES");
              setOption(!option);
            }}
          >
            PHONES
          </button>
          <button
            className="pr-20 pl-2 text-left pb-3  hover:bg-amber-500"
            onClick={() => {
              setValue("TABLEEST");
              setOption(!option);
            }}
          >
            TABLEEST
          </button>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default DropdwonSide;
