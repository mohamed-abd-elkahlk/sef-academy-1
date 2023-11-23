import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import { FaRegTrashAlt } from "react-icons/fa";

const LinkItem = ({ link, onDelete }) => {
  return (
    <div className="mb-3">
      <div className="flex items-center mb-4">
        <span className="mr-2 text-gray-900 dark:text-white">
          {link.websiteName} :
        </span>
        <a
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary underline mr-6"
        >
          {link.url}
        </a>
        <FaRegTrashAlt
          className="text-primary cursor-pointer"
          size={20}
          onClick={onDelete}
        />
      </div>
    </div>
  );
};

const EighthStep = () => {
  const [websiteName, setWebsiteName] = useState("");
  const [url, setUrl] = useState("");
  const [links, setLinks] = useState([]);

  const addLink = () => {
    if (websiteName && url) {
      const newLink = { websiteName, url };
      setLinks([...links, newLink]);
      setWebsiteName("");
      setUrl("");
    }
  };

  const deleteLink = (index) => {
    const updatedLinks = [...links];
    updatedLinks.splice(index, 1);
    setLinks(updatedLinks);
  };

  return (
    <div>
      <div className="block mb-6 text-sm font-medium text-gray-900 dark:text-white">
        Links
      </div>

      <div className="output">
        {links.map((link, index) => (
          <LinkItem
            key={index}
            link={link}
            onDelete={() => deleteLink(index)}
          />
        ))}
      </div>

      <div className="grid gap-6 md:grid-cols-4 mb-3">
        <div className="md:col-span-1">
          <label
            htmlFor="website"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Website Name
          </label>
          <input
            type="text"
            id="website"
            value={websiteName}
            onChange={(e) => setWebsiteName(e.target.value)}
            className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
            placeholder="Website Name"
            required
          />
        </div>
        <div className="md:col-span-3">
          <label
            htmlFor="url"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            URL
          </label>
          <div className="flex justify-between items-center">
            <input
              type="text"
              id="url"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="bg-gray-50 border-none outline-none text-gray-900 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
              placeholder="URL"
              required
            />
            <CiCirclePlus
              size={40}
              className="text-primary cursor-pointer ml-3"
              onClick={addLink}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EighthStep;
