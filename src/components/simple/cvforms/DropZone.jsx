import { IoCloudUploadOutline } from "react-icons/io5";

export const DropZone = (props) => {
  return (
    <div className={!props.h && "mb-6"}>
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {props.title ? props.title : "Personal Photo"}
      </label>
      <div className="flex items-center justify-center w-full">
        <label
          htmlFor="dropzone-file"
          className={`flex flex-col items-center justify-center w-full border-2 border-primary border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-primary dark:hover:border-gray-500 dark:hover:bg-gray-600 ${
            props.h ? "h-32" : "h-64"
          }`}
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <IoCloudUploadOutline className="mb-2 text-primary" size={30} />
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
              <span className="font-semibold">Drag & drop files or </span>
              <span className="text-primary underline">Browse</span>
            </p>
            {!props.h && (
              <p className="text-xs text-gray-500 dark:text-gray-400">
                SVG, PNG, JPG or GIF (MAX. 800x400px)
              </p>
            )}
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
    </div>
  );
};
