import { Container, Row, Col, Button } from "react-bootstrap";

function Hero() {
  const handleContactClick = (e) => {
    e.preventDefault();
    const element = document.getElementById("contact");
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
    <section id="home" className="hero-section">
      <Container>
        <Row className="align-items-center min-vh-100">
          <Col lg={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold mb-4">
              Hi, I'm Christine Joy Aldea<span className="text-primary"></span>
            </h1>
            <h2 className="display-6 mb-4 text-muted">
              Recent Computer Science Graduate
            </h2>
            <p className="lead mb-4">
              A passionate and motivated fresh graduate eager to start my career
              in web development. I love building modern web applications and am
              excited to contribute to innovative projects while continuing to
              learn and grow as a developer.
            </p>
            <div className="hero-buttons">
              <Button
                variant="primary"
                size="lg"
                className="me-3 mb-3"
                onClick={handleContactClick}
              >
                Get In Touch
              </Button>
              <Button
                variant="light"
                size="lg"
                className="me-3 mb-3"
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.getElementById("projects");
                  if (element) {
                    const offset = 70;
                    const elementPosition = element.getBoundingClientRect().top;
                    const offsetPosition =
                      elementPosition + window.pageYOffset - offset;
                    window.scrollTo({
                      top: offsetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                View My Work
              </Button>
              <Button
                variant="success"
                size="lg"
                className="mb-3"
                href="/resume.pdf"
                download="Christine_Joy_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-download me-2"></i>
                Download Resume
              </Button>
            </div>
            <div className="hero-social mt-5">
              <p className="text-white-50 mb-3">Connect with me</p>
              <div className="social-links">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="GitHub"
                >
                  <i className="bi bi-github"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/christine-joy-aldea-058717358/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="LinkedIn"
                >
                  <i className="bi bi-linkedin"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Twitter"
                >
                  <i className="bi bi-twitter"></i>
                </a>
                <a
                  href="https://medium.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label="Medium"
                >
                  <i className="bi bi-medium"></i>
                </a>
                <a
                  href="mailto:christienejaldea@gmail.com"
                  className="social-link"
                  aria-label="Email"
                >
                  <i className="bi bi-envelope-fill"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Hero;
