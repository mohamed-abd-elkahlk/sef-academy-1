import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";

function SeventhStep() {
  const [interest, setInterest] = useState("");
  const [currentInterest, setCurrentInterest] = useState("");
  const [interests, setInterests] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const addInterests = () => {
    if (interest) {
      setInterests([...interests, interest]);
      setInterest("");
    }
  };

  const removeInterest = (index) => {
    const newInterests = [...interests];
    newInterests.splice(index, 1);
    setInterests(newInterests);
  };

  const editInterest = (index) => {
    setEditIndex(index);
  };

  const deleteInterest = (index) => {
    removeInterest(index);
  };

  const saveEdit = () => {
    setInterests(
      interests.map((interest, i) =>
        i === editIndex ? currentInterest : interest
      )
    );
    setCurrentInterest("");
    setEditIndex(null);
  };

  return (
    <div>
      <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Hobbies and interests
      </div>
      <div className="w-full mx-auto" id="interestsContainer">
        {interests.map((interest, index) => (
          <div key={index} className=" mb-3 flex items-center justify-between">
            <input
              type="text"
              id="output-interest"
              className="w-full border bg-gray-700 border-none outline-none p-2 rounded"
              value={
                editIndex === index && currentInterest
                  ? currentInterest
                  : interests[index]
              }
              onChange={(e) => setCurrentInterest(e.target.value)}
            />
            <div className="interest-actions flex items-center justify-between text-primary">
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
                    onClick={() => editInterest(index)}
                    size={20}
                  />
                )}
              </div>
              <FaRegTrashAlt
                className="ml-3"
                onClick={() => deleteInterest(index)}
                size={20}
              />
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mx-auto mb-5 flex justify-center items-center">
        <input
          type="text"
          id="interests"
          className="w-full border bg-gray-700 border-none outline-none p-2 rounded"
          value={interest}
          onChange={(e) => setInterest(e.target.value)}
        />
        <button id="addInterests" onClick={addInterests}>
          <CiCirclePlus size={40} className="text-primary ml-3" />
        </button>
      </div>
    </div>
  );
}

export default SeventhStep;
