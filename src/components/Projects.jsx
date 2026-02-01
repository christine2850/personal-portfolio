import { Container, Row, Col, Card, Button, Badge } from "react-bootstrap";

function Projects() {
  const projects = [
    {
      title: "AirGust Website",
      description:
        "AirGust provides expert solar installation, aircon repair, and maintenance services—helping homes and businesses stay cool, efficient, and energy-smart.",
      technologies: ["PHP", "HTML", "CSS", "JavaScript"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/airgust.png",
    },
    {
      title: "Health Website",
      description:
        "Web application for students to track grades, calculate GPA, and visualize academic progress. Built as a personal project to help manage university coursework.",
      technologies: ["React", "JavaScript", "Chart.js", "CSS3"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/web2.jpg",
    },
    {
      title: "Blog Platform",
      description:
        "Full-stack blog platform with user authentication, CRUD operations for posts, and comment system. Built to practice RESTful API development and database design.",
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      github: "https://github.com",
      demo: "https://demo.com",
      image: "/images/web1.jpg",
    },
  ];

  return (
    <section id="projects" className="projects-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Projects</h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">Some of my recent work</p>
          </Col>
        </Row>

        <Row>
          {projects.map((project, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 project-card">
                <div className="project-image-wrapper">
                  <Card.Img
                    variant="top"
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />

                  <div className="project-overlay">
                    <Button
                      variant="light"
                      className="me-2"
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Live Demo
                    </Button>

                    <Button
                      variant="outline-light"
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GitHub
                    </Button>
                  </div>
                </div>

                <Card.Body className="p-4">
                  <Card.Title className="h4 mb-3">{project.title}</Card.Title>

                  <Card.Text className="text-muted mb-3">
                    {project.description}
                  </Card.Text>

                  <div className="d-flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIdx) => (
                      <Badge key={techIdx} bg="primary" className="px-3 py-2">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
