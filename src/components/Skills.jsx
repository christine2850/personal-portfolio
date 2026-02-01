import { Container, Row, Col, Card } from "react-bootstrap";

function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 75 },
        { name: "JavaScript", level: 80 },
        { name: "HTML5/CSS3", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "TypeScript", level: 65 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "PHP", level: 70 },
        { name: "Laravel", level: 72 },
        { name: "Python", level: 75 },
        { name: "RESTful APIs", level: 75 },
        { name: "Java", level: 70 },
      ],
    },
    {
      title: "Tools & Others",
      skills: [
        { name: "Git", level: 80 },
        { name: "SQL/MySQL", level: 70 },
        { name: "MySQL Workbench", level: 68 },
        { name: "Visual Studio Code", level: 85 },
        { name: "Postman API Testing", level: 75 },
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Skills</h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">
              Technologies and tools I work with
            </p>
          </Col>
        </Row>
        <Row>
          {skillCategories.map((category, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <Card className="h-100 shadow-sm border-0 skill-card">
                <Card.Body className="p-4">
                  <h3 className="h4 mb-4 text-primary">{category.title}</h3>
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skillIdx} className="mb-4">
                      <div className="d-flex justify-content-between mb-2">
                        <span className="fw-semibold">{skill.name}</span>
                        <span className="text-muted">{skill.level}%</span>
                      </div>
                      <div className="progress" style={{ height: "8px" }}>
                        <div
                          className="progress-bar bg-primary"
                          role="progressbar"
                          style={{ width: `${skill.level}%` }}
                          aria-valuenow={skill.level}
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
