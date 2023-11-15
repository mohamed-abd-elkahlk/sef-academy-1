import { useState } from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";

const menuItems = [
  { title: "HOME", link: "/" },
  { title: "ABOUT", link: "/about" },
  {
    title: "TECH",
    link: "/tech",
    dropdownItems: [
      { title: "Frontend", link: "/tech/frontend" },
      { title: "Backend", link: "/tech/backend" },
      { title: "DevOps", link: "/tech/devops" },
    ],
  },
  { title: "MED", link: "/med" },
  { title: "ART", link: "/art" },
  { title: "SPOR", link: "/spor" },
  {
    title: "JOBS",
    link: "/job",
    dropdownItems: [
      { title: "Software Engineer", link: "/job/software-engineer" },
      { title: "Web Developer", link: "/job/web-developer" },
      { title: "Data Analyst", link: "/job/data-analyst" },
    ],
  },
];

const NavbarComponent = () => {
  const [activeItem, setActiveItem] = useState("/");

  const handleItemClick = (e, link) => {
    setActiveItem("");
    e.preventDefault();
    setActiveItem(link);
  };

  return (
    <Navbar className="bg-dark" expand="lg" variant="dark">
      <Container>
        <Navbar.Brand href="/">LOGO</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav
            variant="underline"
            className="me-auto navbar-nav-home-list w-75"
          >
            {menuItems.map((menuItem, index) =>
              menuItem.dropdownItems ? (
                <NavDropdown
                  key={index}
                  title={menuItem.title}
                  id={`nav-dropdown-${index}`}
                  className={activeItem === menuItem.link ? "active" : ""}
                >
                  {menuItem.dropdownItems.map((dropdownItem, i) => (
                    <NavDropdown.Item
                      key={i}
                      href={dropdownItem.link}
                      onClick={(e) => handleItemClick(e, menuItem.link)}
                    >
                      {dropdownItem.title}
                    </NavDropdown.Item>
                  ))}
                </NavDropdown>
              ) : (
                <Nav.Link
                  key={index}
                  href={menuItem.link}
                  className={`nav-link-home-text ${
                    activeItem === menuItem.link ? "active" : ""
                  }`}
                  onClick={(e) => handleItemClick(e, menuItem.link)}
                >
                  {menuItem.title}
                </Nav.Link>
              )
            )}
          </Nav>
          <a
            href="/contactus"
            className="btn btn-contact nav-bar-button-color rounded-1 text-white ms-5 nav-link-home-text"
          >
            CONTACT US
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
