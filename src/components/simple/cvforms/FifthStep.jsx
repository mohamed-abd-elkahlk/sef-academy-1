import { FaRegTrashAlt } from "react-icons/fa";
import { TextArea } from "./TextArea";
import { CiCirclePlus } from "react-icons/ci";

const FifthStep = () => {
  return (
    <div>
      <form className="border-primary border border-dashed rounded-lg p-4">
        <div className="mb-6">
          <label
            htmlFor="organization"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Organization Name
          </label>
          <input
            type="organization"
            id="organization"
            className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Organization Name"
            required
          />
        </div>
        <div className="mb-6">
          <label
            htmlFor="degree"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Degree
          </label>
          <input
            type="degree"
            id="degree"
            className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
            placeholder="Degree"
            required
          />
        </div>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="from"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              From
            </label>
            <input
              type="date"
              id="from"
              className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder=""
              required
            />
          </div>
          <div>
            <label
              htmlFor="to"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              To
            </label>
            <input
              type="date"
              id="to"
              className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white "
              placeholder=""
              required
            />
          </div>
        </div>
        <div>
          <TextArea title="Description" />
        </div>
      </form>
      <div className="mt-3 flex justify-end items-center">
        <FaRegTrashAlt className="ml-3 text-primary" size={30} />
        <CiCirclePlus size={40} className="text-primary ml-3" />
      </div>
    </div>
  );
};

export default FifthStep;
