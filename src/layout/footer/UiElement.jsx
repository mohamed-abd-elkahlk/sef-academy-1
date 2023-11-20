const UiElement = () => {
  return (
    <div className="flex gap-2 flex-col">
      <ul className="flex gap-3 flex-wrap">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>TECH</li>
        <li>BUSSINESS</li>
      </ul>
      <ul className=" flex gap-3">
        <li>SECURITY</li>
        <li>MEDICAL</li>
        <li>STARTUPS</li>
        <li>APPS</li>
        <li>CONTATCT US</li>
        <li>SPORTS</li>
      </ul>
    </div>
  );
};

export default UiElement;
