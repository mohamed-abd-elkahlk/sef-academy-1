import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import logo from "../imgs/logo.png";
import "./App.css";
function Nav() {
  // active nav
  let active = () => {
    let nav = document.querySelector("nav").querySelectorAll(".link");
    nav.forEach((e) => {
      e.addEventListener("click", function () {
        nav.forEach((nav) => {
          nav.classList.remove("active");
          this.classList.add("active");
        });
      });
    });
  };
  //   show menue in small screen
  let show = () => {
    let menu = document.querySelector("ul").classList.toggle("show");
  };

  return (
    <>
      <div className="login">LOGIN</div>
      <nav>
        <img src={logo} alt="Sef logo" />

        <ul>
          <li onClick={active}>
            <Link to="/" className="link active">
              HOME
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="tech link">
              TECH
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              BUSINESS
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              SECURITY
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              SPORTS
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              MEDICAL
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              STARTUPS
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="link">
              JOPS
            </Link>
          </li>
          <li onClick={active}>
            <Link to="/" className="contact link">
              CONTACT US
            </Link>
          </li>
        </ul>
        <div className="menu" onClick={show}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </nav>
      <div style={{ height: "100vh" }}></div>
    </>
  );
}

export default Nav;
