import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { CheckInput } from "./CheckInput";
import ButtonCreation from "../button/ButtonCreation";

const JobSidebar = () => {
  const [selectedOption, setSelectedOption] = useState("E-commerce");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const jobFilters = [
    {
      id: 1,
      title: "Job Type",
      subtitles: ["Full Time", "Part Time", "Remote"],
    },
    {
      id: 2,
      title: "Level",
      subtitles: ["Entry Level", "Intermediate", "Expert"],
    },
    {
      id: 3,
      title: "Salary Range",
      subtitles: [
        "Under 4000 EGP",
        "Between 4000 & 10000 EGP",
        "More Than 10000 EGP",
      ],
    },
  ];

  const locations = ["One", "two", "three"];

  return (
    <aside className="">
      <div className="h-full px-3 py-">
        <ul className="space-y-2 font-medium p-3 px-6">
          <li className="flex justify-between align-items-cente rounded-md mb-8">
            <span className="ms-3">Filters</span>
            <button className="ms-3 text-primary">Clear All</button>
          </li>
          <li style={{ marginBottom: "3rem" }}>
            <div className="ms-3 mb-4">Location</div>

            <div className="relative">
              <select
                value={selectedOption}
                onChange={handleOptionChange}
                className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              >
                {locations.map((element) => (
                  <option key={element} value={element}>
                    {element}
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <IoIosArrowDown className="fill-current h-4 w-4" />
              </div>
            </div>
          </li>
          {jobFilters.map((jf) => (
            <CheckInput key={jf.id} jf={jf} />
          ))}
        </ul>
        <div className="space-y-2 font-medium p-3 px-6">
          <ButtonCreation title="CREATE YOUR CV" w="100%" />
        </div>
      </div>
    </aside>
  );
};

export default JobSidebar;
