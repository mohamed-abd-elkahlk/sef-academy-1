import logo from "../assets/Images/favicon.ico";

function Footer() {
  return (
    <>
      <footer style={{ background: "#333" }}>
        <img src={logo} alt="" />
        <div className="father">
          <div className="first-child">
            <h2> SOFTWARE ENGINEERING FOR FUTURE </h2>
            <div>
              HOME ABOUT TECH BUSINESS SECURITY MEDICAL STARTUPS APPS COURSES
              CONTACTUS SPORTS
            </div>
          </div>
          <div className="second-child">
            <ul>
              <li>sefffuture@gmail.com</li>
              <li>+201098481288</li>
              <li>+201555177645</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="last">
          <div> @2023 EGYPT,ALLRIGHTS RESERVED</div>
          <div className="icons"></div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
