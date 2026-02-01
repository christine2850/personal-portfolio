import { Container, Row, Col, Card, Badge } from "react-bootstrap";

function Achievements() {
  const achievements = [
    {
      type: "certification",
      title: "Meta React Developer Certificate",
      issuer: "Meta (Coursera)",
      date: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: "⚛️",
      badge: null,
    },
    {
      type: "achievement",
      title: "Hackathon Winner<br/>",
      issuer: "University Tech Fest 2024",
      date: "2024",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: "🏆",
      badge: null,
    },
    {
      type: "certification",
      title: "JavaScript Algorithms and Data Structures",
      issuer: "freeCodeCamp",
      date: "2023",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: "💻",
      badge: null,
    },
    {
      type: "achievement",
      title: "Open Source Contributor",
      issuer: "GitHub",
      date: "Ongoing",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
      icon: "🔧",
      badge: null,
    },
  ];

  return (
    <section id="achievements" className="achievements-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">
              Achievements & Certifications
            </h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">
              Professional certifications and notable achievements
            </p>
          </Col>
        </Row>
        <Row>
          {achievements.map((achievement, idx) => (
            <Col lg={4} md={6} key={idx} className="mb-4">
              <Card className="achievement-card h-100 shadow-sm border-0">
                <Card.Body className="p-4">
                  <div className="d-flex align-items-start mb-3">
                    <div className="achievement-icon me-3">
                      {achievement.icon}
                    </div>
                    <div className="flex-grow-1">
                      <div className="d-flex justify-content-between align-items-start mb-2">
                        <h5 className="mb-1 fw-bold">{achievement.title}</h5>
                        <Badge
                          bg={
                            achievement.type === "certification"
                              ? "primary"
                              : "success"
                          }
                        >
                          {achievement.type}
                        </Badge>
                      </div>
                      <p className="text-primary mb-2 fw-semibold small">
                        {achievement.issuer}
                      </p>
                      <p className="text-muted small mb-2">
                        <i className="bi bi-calendar3 me-1"></i>
                        {achievement.date}
                      </p>
                    </div>
                  </div>
                  <p className="text-muted mb-0 small">
                    {achievement.description}
                  </p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Achievements;
