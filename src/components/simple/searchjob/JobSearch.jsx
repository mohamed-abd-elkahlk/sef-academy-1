import { IoIosSearch } from "react-icons/io";

const JobSearch = () => {
  return (
    <form>
      <label
        htmlFor="default-search"
        className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >
        Search
      </label>
      <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch className="text-primary" fontSize={25} />
        </div>
        <input
          type="search"
          id="default-search"
          className="block w-full p-4 ps-12 text-sm text-gray-900 border-none focus:border-none focus:outline-none rounded-lg bg-gray-50   dark:bg-gray-700  dark:placeholder-gray-400 dark:text-white "
          placeholder="Search for a job"
          required
        />
        <button
          type="submit"
          className="absolute top-0 end-0 p-2.5 px-12 text-lg font-medium h-full text-white bg-primary rounded-e-lg border border-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default JobSearch;
