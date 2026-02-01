import { useState } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  Form,
  Button,
  Alert,
} from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [showAlert, setShowAlert] = useState(false);

  // Validation functions
  const validateName = (name) => {
    if (!name.trim()) {
      return "Name is required";
    }
    if (name.trim().length < 2) {
      return "Name must be at least 2 characters";
    }
    if (!/^[a-zA-Z\s]+$/.test(name.trim())) {
      return "Name can only contain letters and spaces";
    }
    return "";
  };

  const validateEmail = (email) => {
    if (!email.trim()) {
      return "Email is required";
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      return "Please enter a valid email address";
    }
    return "";
  };

  const validateMessage = (message) => {
    if (!message.trim()) {
      return "Message is required";
    }
    if (message.trim().length < 10) {
      return "Message must be at least 10 characters";
    }
    if (message.trim().length > 1000) {
      return "Message must be less than 1000 characters";
    }
    return "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    // Validate on change if field has been touched
    if (touched[name]) {
      let error = "";
      switch (name) {
        case "name":
          error = validateName(value);
          break;
        case "email":
          error = validateEmail(value);
          break;
        case "message":
          error = validateMessage(value);
          break;
        default:
          break;
      }
      setErrors({
        ...errors,
        [name]: error,
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched({
      ...touched,
      [name]: true,
    });

    // Validate on blur
    let error = "";
    switch (name) {
      case "name":
        error = validateName(value);
        break;
      case "email":
        error = validateEmail(value);
        break;
      case "message":
        error = validateMessage(value);
        break;
      default:
        break;
    }
    setErrors({
      ...errors,
      [name]: error,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({
      name: true,
      email: true,
      message: true,
    });

    // Validate all fields
    const nameError = validateName(formData.name);
    const emailError = validateEmail(formData.email);
    const messageError = validateMessage(formData.message);

    const newErrors = {
      name: nameError,
      email: emailError,
      message: messageError,
    };

    setErrors(newErrors);

    // Check if there are any errors
    const hasErrors = Object.values(newErrors).some((error) => error !== "");

    if (!hasErrors) {
      // Here you would typically send the form data to a backend
      console.log("Form submitted:", formData);
      setShowAlert(true);
      setFormData({ name: "", email: "", message: "" });
      setErrors({ name: "", email: "", message: "" });
      setTouched({ name: false, email: false, message: false });
      setTimeout(() => setShowAlert(false), 5000);
    }
  };

  const contactInfo = [
    {
      icon: "📧",
      title: "Email",
      value: "christinejaldea@gmail.com",
      link: "https://gmail.com",
    },
    {
      icon: "📱",
      title: "Phone",
      value: "+63 993 407 7189",
      link: "tel:+15551234567",
    },
    {
      icon: "📍",
      title: "Location",
      value: "Cabuyao, Laguna",
      link: null,
    },
    {
      icon: "💼",
      title: "LinkedIn",
      value: "linkedin.com/in/christine-joy-aldea-058717358",
      link: "https://www.linkedin.com/in/christine-joy-aldea-058717358/",
    },
  ];

  return (
    <section id="contact" className="contact-section py-5 bg-light">
      <Container>
        <Row>
          <Col lg={12} className="text-center mb-5">
            <h2 className="display-4 fw-bold mb-3">Get In Touch</h2>
            <div className="underline mb-4"></div>
            <p className="lead text-muted">
              I'm actively seeking entry-level opportunities and would love to
              connect!
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg={8} className="mx-auto">
            <Row>
              <Col md={6} className="mb-4">
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-4">Contact Information</h3>
                    {contactInfo.map((info, idx) => (
                      <div key={idx} className="mb-3">
                        <div className="d-flex align-items-start">
                          <span className="fs-4 me-3">{info.icon}</span>
                          <div>
                            <h6 className="mb-1 fw-semibold">{info.title}</h6>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-decoration-none text-muted"
                                target={
                                  info.link.startsWith("http")
                                    ? "_blank"
                                    : "_self"
                                }
                                rel={
                                  info.link.startsWith("http")
                                    ? "noopener noreferrer"
                                    : ""
                                }
                              >
                                {info.value}
                              </a>
                            ) : (
                              <p className="text-muted mb-0">{info.value}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6}>
                <Card className="h-100 shadow-sm border-0">
                  <Card.Body className="p-4">
                    <h3 className="h5 mb-4">Send a Message</h3>
                    {showAlert && (
                      <Alert
                        variant="success"
                        dismissible
                        onClose={() => setShowAlert(false)}
                      >
                        Thank you for your message! I'll get back to you soon.
                      </Alert>
                    )}
                    <Form onSubmit={handleSubmit} noValidate>
                      <Form.Group className="mb-3">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.name && errors.name !== ""}
                          isValid={
                            touched.name &&
                            errors.name === "" &&
                            formData.name.trim().length >= 2
                          }
                          placeholder="Your Name"
                        />
                        {touched.name && errors.name && (
                          <Form.Control.Feedback type="invalid">
                            {errors.name}
                          </Form.Control.Feedback>
                        )}
                        {touched.name &&
                          !errors.name &&
                          formData.name.trim().length >= 2 && (
                            <Form.Control.Feedback type="valid">
                              Looks good!
                            </Form.Control.Feedback>
                          )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.email && errors.email !== ""}
                          isValid={
                            touched.email &&
                            errors.email === "" &&
                            formData.email.trim().length > 0 &&
                            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                              formData.email.trim()
                            )
                          }
                          placeholder="your.email@example.com"
                        />
                        {touched.email && errors.email && (
                          <Form.Control.Feedback type="invalid">
                            {errors.email}
                          </Form.Control.Feedback>
                        )}
                        {touched.email &&
                          !errors.email &&
                          formData.email.trim().length > 0 &&
                          /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
                            formData.email.trim()
                          ) && (
                            <Form.Control.Feedback type="valid">
                              Looks good!
                            </Form.Control.Feedback>
                          )}
                      </Form.Group>
                      <Form.Group className="mb-3">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                          as="textarea"
                          rows={5}
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onBlur={handleBlur}
                          isInvalid={touched.message && errors.message !== ""}
                          isValid={
                            touched.message &&
                            errors.message === "" &&
                            formData.message.trim().length >= 10
                          }
                          placeholder="Your message here..."
                          maxLength={1000}
                        />
                        {touched.message && errors.message && (
                          <Form.Control.Feedback type="invalid">
                            {errors.message}
                          </Form.Control.Feedback>
                        )}
                        {touched.message &&
                          !errors.message &&
                          formData.message.trim().length >= 10 && (
                            <Form.Control.Feedback type="valid">
                              Looks good!
                            </Form.Control.Feedback>
                          )}
                        <Form.Text className="text-muted">
                          {formData.message.length}/1000 characters
                        </Form.Text>
                      </Form.Group>
                      <Button
                        variant="primary"
                        type="submit"
                        className="w-100"
                        disabled={
                          Object.values(errors).some((error) => error !== "") ||
                          !formData.name ||
                          !formData.email ||
                          !formData.message
                        }
                      >
                        Send Message
                      </Button>
                    </Form>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Contact;
