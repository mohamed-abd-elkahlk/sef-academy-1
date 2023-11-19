const Navbuttons = ({ to, vlaue }) => {
  if (vlaue === "CONTACT US") {
    return (
      <button className="border-amber-400 border-solid border-2 p-2 h-10 rounded-lg mt-10 hover:bg-amber-400 hover:text-black hover:border-none duration-300">
        <a href={to}>{vlaue}</a>
      </button>
    );
  }
  return (
    <button>
      <a href={to}>{vlaue}</a>
    </button>
  );
};

export default Navbuttons;
