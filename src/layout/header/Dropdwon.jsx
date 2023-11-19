import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Dropdwon = () => {
  const [option, setOption] = useState(false);
  const [value, setValue] = useState("TECH");
  const handleOptions = () => {
    setOption(!option);
  };
  return (
    <div className="relative mt-6 dropDown top-6">
      <button className="flex gap-3 items-center " onClick={handleOptions}>
        {value}
        <IoIosArrowDown />{" "}
      </button>
      {option ? (
        <div className="drop-down-elements flex flex-col gap-4 text-left bg-[#0a0a0a11] absolute top-11 -left-5">
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

export default Dropdwon;
