import { Container, Row, Col } from "react-bootstrap";

function Experience() {
  const experiences = [
    {
      type: "work",
      title: "Web Development Intern",
      company: "Gleent Inc.",
      location: "Hybrid",
      period: "February 2025 - March 2025",
      description: [
        "Assisted in devepment and maintenance of system modules for payroll web application.",
        "Collaborated with senior developers on bug fixes and feature implementationAuthored unit tests and technical documentation to improve code quality and long-term maintanability.",
        "Collaborated with an agile, cross-functional team to implement new features, enhancements, and defects fixes.",
        "Gained hands-on experience in both frontend and backend developement, as well as end-to-end web development workflows.",
      ],
      technologies: [
        "PHP",
        "Laravel",
        "Git",
        "REST APIs",
        "HTML",
        "CSS",
        "JavaScript",
      ],
    },
    {
      type: "work",
      title:
        "Caching and Contextual Retrieval - Augmented Generation for Enhanced Conversational AI.",
      company: "Thesis Projects",
      location: "Onsite",
      period: "2024 - 2025",
      description: [
        "Assisted in the collection and preprocessing of project data using web scraping tools such as Scrapy.",
        "Collected, cleaned, and organized relevant textual datasets to support the training and evaluation of a conversational AI model.",
        "Ensured the data accurancy, consistency, and quality for use in Retrieval-Augmented Generation (RAG) flows.",
        "Collaborated closely with the team to align data collection activities with project objectives and research requirements.",
      ],
      technologies: [
        "Python",
        "Scrapy",
        "NPL",
        "Retrieval-Augmented Generation",
        "Git",
      ],
    },
    {
      type: "education",
      title: "Bachelor of Science in Computer Science",
      company: "National University - Laguna",
      location: "Calamba, Laguna",
      period: "2021 - 2025",
      description: [
        "Relevant Coursework: Web Development, Data Structures, Algorithms, Database Systems, Software Engineering, Artificial Intelligence.",
      ],
      technologies: ["Java", "Python", "JavaScript", "SQL", "Web Development"],
    },
  ];

  return (
    <section id="experience" className="experience-section py-5">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Experience & Education</h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">
              My internships, projects, and educational background
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <div className="timeline">
              {experiences.map((exp, idx) => (
                <div key={idx} className={`timeline-item ${exp.type}`}>
                  <div className="timeline-marker">
                    <div className="marker-icon">
                      {exp.type === "work" ? "💼" : "🎓"}
                    </div>
                  </div>
                  <div className="timeline-content">
                    <div className="timeline-header">
                      <h3 className="h4 mb-1">{exp.title}</h3>
                      <h4 className="h5 text-primary mb-2">{exp.company}</h4>
                      <div className="d-flex flex-wrap align-items-center gap-3 mb-3">
                        <span className="text-muted">
                          <i className="bi bi-geo-alt-fill me-1"></i>
                          {exp.location}
                        </span>
                        <span className="text-muted">
                          <i className="bi bi-calendar3 me-1"></i>
                          {exp.period}
                        </span>
                      </div>
                    </div>
                    <ul className="timeline-description">
                      {exp.description.map((item, itemIdx) => (
                        <li key={itemIdx}>{item}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech mt-3">
                      {exp.technologies.map((tech, techIdx) => (
                        <span key={techIdx} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Experience;
