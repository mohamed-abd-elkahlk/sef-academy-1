import { FaRegTrashAlt } from "react-icons/fa";
import { TextArea } from "./TextArea";
import { CiCirclePlus } from "react-icons/ci";

const SixthStep = () => {
  return (
    <div>
      <form className="border-primary border border-dashed rounded-lg p-4">
        <div className="grid gap-6 md:grid-cols-3 mb-3">
          <div className="md:col-span-2">
            <label
              htmlFor="award"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Award Name
            </label>
            <input
              type="text"
              id="award"
              className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Award Name"
              required
            />
          </div>
          <div className="md:col-span-1">
            <label
              htmlFor="year"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Award Year
            </label>
            <input
              type="text"
              id="year"
              className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="Award Year"
              required
            />
          </div>
        </div>

        <TextArea title="Description" />
      </form>
      <div className="mt-3 flex justify-end items-center">
        <FaRegTrashAlt className="ml-3 text-primary" size={30} />
        <CiCirclePlus size={40} className="text-primary ml-3" />
      </div>
    </div>
  );
};

export default SixthStep;
