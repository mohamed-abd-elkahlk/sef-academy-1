import { useState } from "react";
import { FaArrowUp } from "react-icons/fa";

const GoToTop = () => {
  const [visble, setVsible] = useState(false);
  const handleEvent = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVsible(true);
    } else if (scrolled <= 300) {
      setVsible(false);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", handleEvent);
  return (
    <>
      {visble ? (
        <button
          onClick={scrollToTop}
          className="bg-[#fff1]  hover:bg-amber-500 duration-500 rounded-[50%] fixed bottom-[30%] right-7 w-[70px] h-[70px] border-2 border-amber-500 "
        >
          <FaArrowUp className="m-auto text-xl" />
        </button>
      ) : (
        ""
      )}
    </>
  );
};

export default GoToTop;
