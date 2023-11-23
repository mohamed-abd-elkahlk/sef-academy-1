import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function ThirdStep() {
  const [skill, setSkill] = useState("");
  const [currentSkill, setCurrentSkill] = useState("");
  const [skills, setSkills] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addSkill = () => {
    if (skill) {
      setSkills([...skills, skill]);
      setSkill("");
    }
  };

  const removeSkill = (index) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    setSkills(newSkills);
  };

  const editSkill = (index) => {
    setEditIndex(index);
  };

  const deleteSkill = (index) => {
    removeSkill(index);
  };

  const saveEdit = () => {
    setSkills(
      skills.map((skill, i) => (i === editIndex ? currentSkill : skill))
    );
    setCurrentSkill("");
    setEditIndex(null);
  };

  return (
    <div>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Skills
      </div>
      <div className="w-full mx-auto" id="skillsContainer">
        {skills.map((skill, index) => (
          <div key={index} className=" mb-3 flex items-center justify-between">
            <input
              type="text"
              id="output-skill"
              className="w-full border bg-gray-700 border-none outline-none p-2 rounded"
              value={
                editIndex === index && currentSkill
                  ? currentSkill
                  : skills[index]
              }
              onChange={(e) => setCurrentSkill(e.target.value)}
            />
            <div className="skill-actions flex items-center justify-between text-primary">
              <div>
                {editIndex === index ? (
                  <FaCheck
                    className="ml-3 cursor-pointer"
                    onClick={saveEdit}
                    size={20}
                  />
                ) : (
                  <FaRegEdit
                    className="ml-3 cursor-pointer"
                    onClick={() => editSkill(index)}
                    size={20}
                  />
                )}
              </div>
              <FaRegTrashAlt
                className="ml-3"
                onClick={() => deleteSkill(index)}
                size={20}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto mb-5 flex justify-center items-center">
        <input
          type="text"
          id="skill"
          className="w-full border bg-gray-700 border-none outline-none p-2 rounded"
          value={skill}
          onChange={(e) => setSkill(e.target.value)}
        />
        <button id="addSkill" onClick={addSkill}>
          <CiCirclePlus size={40} className="text-primary ml-3" />
        </button>
      </div>
    </div>
  );
}

export default ThirdStep;
