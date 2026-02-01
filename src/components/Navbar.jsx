import { useState, useEffect } from "react";
import { Navbar as BootstrapNavbar, Nav, Container } from "react-bootstrap";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 70;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <BootstrapNavbar
      expand="lg"
      fixed="top"
      className={`custom-navbar ${scrolled ? "scrolled" : ""}`}
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand
          href="#home"
          onClick={(e) => handleNavClick(e, "home")}
        >
          Portfolio
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" onClick={(e) => handleNavClick(e, "home")}>
              Home
            </Nav.Link>
            <Nav.Link href="#about" onClick={(e) => handleNavClick(e, "about")}>
              About
            </Nav.Link>
            <Nav.Link
              href="#experience"
              onClick={(e) => handleNavClick(e, "experience")}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#skills"
              onClick={(e) => handleNavClick(e, "skills")}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#projects"
              onClick={(e) => handleNavClick(e, "projects")}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#achievements"
              onClick={(e) => handleNavClick(e, "achievements")}
            >
              Achievements
            </Nav.Link>
            <Nav.Link
              href="#testimonials"
              onClick={(e) => handleNavClick(e, "testimonials")}
            >
              Testimonials
            </Nav.Link>
            <Nav.Link
              href="#contact"
              onClick={(e) => handleNavClick(e, "contact")}
            >
              Contact
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </Container>
    </BootstrapNavbar>
  );
}

export default Navbar;
