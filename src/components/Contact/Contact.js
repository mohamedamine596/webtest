import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import Particle from "../Particle";
import { AiOutlineMail } from "react-icons/ai";
import { FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      // Using Formspree for email handling (free and simple)
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Thank you! Your message has been sent successfully.",
        });
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error("Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={12}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p style={{ color: "white", textAlign: "center" }}>
              Feel free to reach out to me for any inquiries or opportunities!
            </p>
          </Col>
        </Row>

        <Row style={{ justifyContent: "center", paddingTop: "30px" }}>
          <Col md={4} className="contact-info">
            <div style={{ marginBottom: "30px" }}>
              <h3 className="purple">
                <AiOutlineMail /> Email
              </h3>
              <p style={{ color: "white" }}>aminebougueddima@gmail.com</p>
              <p style={{ color: "white" }}>mohamed.amine.bouguiddima@horizon-tech.tn</p>
            </div>
            <div style={{ marginBottom: "30px" }}>
              <h3 className="purple">
                <FaMapMarkerAlt /> Location
              </h3>
              <p style={{ color: "white" }}>Tunisia</p>
            </div>
          </Col>

          <Col md={8}>
            {status.message && (
              <Alert variant={status.type === "success" ? "success" : "danger"}>
                {status.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your Name"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgba(200, 137, 230, 0.637)",
                        color: "white",
                      }}
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label style={{ color: "white" }}>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                      style={{
                        backgroundColor: "transparent",
                        border: "1px solid rgba(200, 137, 230, 0.637)",
                        color: "white",
                      }}
                    />
                  </Form.Group>
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Subject</Form.Label>
                <Form.Control
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Subject"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(200, 137, 230, 0.637)",
                    color: "white",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Label style={{ color: "white" }}>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your Message"
                  style={{
                    backgroundColor: "transparent",
                    border: "1px solid rgba(200, 137, 230, 0.637)",
                    color: "white",
                  }}
                />
              </Form.Group>

              <Button
                variant="primary"
                type="submit"
                disabled={isSubmitting}
                style={{ width: "150px" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
