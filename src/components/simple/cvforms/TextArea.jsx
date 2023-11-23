export const TextArea = (props) => {
  return (
    <div>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title ? props.title : "About"}
      </label>
      <textarea
        id="message"
        rows="5"
        className={`block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-none outline-none dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white ${
          props.h && "h-32"
        }`}
        placeholder="Write about you here..."
      ></textarea>
    </div>
  );
};
