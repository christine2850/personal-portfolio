import { useState } from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";

function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      role: "Professor of Computer Science",
      company: "State University",
      image: "https://i.pravatar.cc/150?img=1",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
    },
    {
      name: "Michael Novilla",
      role: "Senior Developer & Internship Supervisor",
      company: "Tech Startup Inc.",
      image: "https://i.pravatar.cc/150?img=12",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
    },
    {
      name: "Ma. Belen Pacle",
      role: "Classmate & Project Partner",
      company: "State University",
      image: "https://i.pravatar.cc/150?img=5",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
    },
    {
      name: "Rica Mae Tamashiro",
      role: "Senior Software Engineer",
      company: "ACN",
      image: "https://i.pravatar.cc/150?img=9",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      rating: 5,
    },
  ];

  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <section id="testimonials" className="testimonials-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Testimonials</h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">
              What professors, mentors, and peers say about me
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={10} className="mx-auto">
            <Carousel
              activeIndex={index}
              onSelect={handleSelect}
              indicators={false}
              interval={5000}
            >
              {testimonials.map((testimonial, idx) => (
                <Carousel.Item key={idx}>
                  <Card className="testimonial-card shadow-lg border-0">
                    <Card.Body className="p-5">
                      <div className="text-center mb-4">
                        <div className="stars mb-3">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <span key={i} className="star">
                              ⭐
                            </span>
                          ))}
                        </div>
                        <Card.Text className="lead fst-italic mb-4">
                          "{testimonial.text}"
                        </Card.Text>
                      </div>
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="testimonial-image rounded-circle me-3"
                        />
                        <div className="text-center text-md-start">
                          <h5 className="mb-1 fw-bold">{testimonial.name}</h5>
                          <p className="text-muted mb-0">
                            {testimonial.role} at {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Testimonials;
