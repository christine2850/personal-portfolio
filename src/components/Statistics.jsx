import { useState, useEffect, useRef } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

function Statistics() {
  const [counts, setCounts] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    commits: 0,
  });

  const [hasAnimated, setHasAnimated] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      icon: "🚀",
      number: 10,
      label: "Projects Completed",
      suffix: "+",
      key: "projects",
    },
    {
      icon: "🏆",
      number: 3,
      label: "Webinar Participated",
      suffix: "",
      key: "clients",
    },
    {
      icon: "📚",
      number: 0,
      label: "Years of Professional Experience",
      suffix: "",
      key: "experience",
    },
    {
      icon: "💻",
      number: 500,
      label: "GitHub Commits",
      suffix: "+",
      key: "commits",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [hasAnimated]);

  const animateCounters = () => {
    stats.forEach((stat) => {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const increment = stat.number / steps;
      const stepDuration = duration / steps;

      let current = 0;
      const timer = setInterval(() => {
        current += increment;
        if (current >= stat.number) {
          setCounts((prev) => ({
            ...prev,
            [stat.key]: stat.number,
          }));
          clearInterval(timer);
        } else {
          setCounts((prev) => ({
            ...prev,
            [stat.key]: Math.floor(current),
          }));
        }
      }, stepDuration);
    });
  };

  return (
    <section ref={sectionRef} className="statistics-section py-5">
      <Container>
        <Row>
          {stats.map((stat, idx) => (
            <Col lg={3} md={6} key={idx} className="mb-4">
              <Card className="stat-card text-center shadow-sm border-0 h-100">
                <Card.Body className="p-4">
                  <div className="stat-icon mb-3">{stat.icon}</div>
                  <h2 className="display-4 fw-bold text-primary mb-2">
                    {stat.key === "commits"
                      ? counts[stat.key].toLocaleString()
                      : counts[stat.key]}
                    {stat.suffix}
                  </h2>
                  <p className="text-muted mb-0 fw-semibold">{stat.label}</p>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export default Statistics;
