import { HiOutlineMailOpen } from "react-icons/hi";
import { FaPhoneVolume } from "react-icons/fa6";
const ContactInfo = () => {
  return (
    <div className="contact-info flex flex-col">
      <p className="font-normal flex gap-2 items-center">
        sefffuters@gmail.com{" "}
        <HiOutlineMailOpen className="text-xl text-amber-500" />
      </p>
      <div className="flex text-right flex-row-reverse ">
        <FaPhoneVolume className="text-xl text-amber-500 " />
        <div className="text-center m-auto">
          <p>+20 109 8481 288</p>
          <p>+20 155 5177 645</p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
