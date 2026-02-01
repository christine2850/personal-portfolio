import { Container, Row, Col, Card } from "react-bootstrap";

function About() {
  return (
    <section id="about" className="about-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">About Me</h2>
            <div className="underline mb-4"></div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg={10}>
            <Card className="shadow-lg border-0">
              <Card.Body className="p-5">
                <Row>
                  <Col md={6}>
                    <h3 className="mb-4">Who I Am</h3>
                    <p className="lead">
                      I'm a recent Computer Science graduate with a strong
                      passion for web development. During my studies, I've built
                      several projects using modern technologies and I'm excited
                      to apply my knowledge in a professional setting.
                    </p>
                    <p>
                      My journey in programming started during university, where
                      I discovered my love for creating web applications. I've
                      completed various projects, participated in hackathons,
                      and continuously worked on improving my skills. I'm eager
                      to learn from experienced developers and contribute to
                      real-world projects.
                    </p>
                  </Col>
                  <Col md={6}>
                    <h3 className="mb-4">What I Do</h3>
                    <ul className="list-unstyled">
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <strong>Frontend Development:</strong> React,
                        JavaScript, HTML5, CSS3
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <strong>Backend Development:</strong> Node.js, Express,
                        RESTful APIs
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <strong>Database Management:</strong> MongoDB,
                        PostgreSQL, MySQL
                      </li>
                      <li className="mb-3">
                        <i className="bi bi-check-circle-fill text-primary me-2"></i>
                        <strong>Version Control:</strong> Git, GitHub,
                        Collaborative Development
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default About;
