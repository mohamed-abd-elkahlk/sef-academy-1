import logo from "../assets/Images/seff_logo_transparent.png";
import GoToTop from "../components/simple/goToTop/GoToTop";
import ContactInfo from "./footer/ContactInfo";
import UiElement from "./footer/UiElement";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <footer className="flex flex-col">
      <GoToTop />
      <div className="mr-3">
        <img src={logo} alt="" className="w-[px] h-[120px] rounded-[50%]" />
      </div>
      <div>
        <h1 className="text-2xl text-capitalize">
          software engineering for future
        </h1>
        <div className="flex mt-6 justify-between">
          <UiElement />
          <ContactInfo />
        </div>
      </div>
      <hr className="border-2  border-white my-3" />
      <div className="flex justify-between">
        <p className="font-light">@2023 EGYPT,ALL RIGHTS RESERVED</p>
        <div className="flex text-3xl gap-5">
          <FaFacebook />
          <FaTwitter />
          <FaInstagram />
          <FaLinkedin />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
