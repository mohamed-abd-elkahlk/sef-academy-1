import logo from "../assets/Images/seff_logo_transparent.png";
import GoToTop from "../components/simple/goToTop/GoToTop";
function Footer() {
  return (
    <footer className="flex flex-col">
      <div className="mr-3 flex">
        <img src={logo} alt="" className="w-[px] h-[120px] rounded-[50%]" />
        <GoToTop />
      </div>
      <div>
        <h1>software engineering for future</h1>
        <ul>
          <li>Home</li>
          <li>ABOUT</li>
          <li>TECH</li>
          <li>BUSSINESS</li>
          <li>SECURITY</li>
          <li>MEDICAL</li>
          <li>STARTUPS</li>
          <li>APPS</li>
          <li>CONTATCT US</li>
          <li>SPORTS</li>
        </ul>
        <div className="contact info">
          <p>sefffuters@gmail.com</p>
          <div>
            <small>+201098481288</small>
            <small>+20 155 5177 645</small>
          </div>
        </div>
      </div>
      <hr />
      <div>
        <p>@2023 EGYPT,ALL RIGHTS RESERVED</p>
        <div>icons here</div>
      </div>
    </footer>
  );
}

export default Footer;
