import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import BlogCard from "./BlogCard";

function Blog() {
  const blogs = [
    {
      title: "Getting Started with Full-Stack Development",
      description: "A comprehensive guide to beginning your journey in full-stack web development, covering both frontend and backend technologies.",
      date: "March 15, 2024",
      tags: ["Web Development", "Full-Stack", "Tutorial"],
      readTime: "8 min read",
    },
    {
      title: "AI Integration in Modern Applications",
      description: "Exploring how artificial intelligence and machine learning are transforming modern web applications and user experiences.",
      date: "March 10, 2024",
      tags: ["AI", "Machine Learning", "Innovation"],
      readTime: "10 min read",
    },
    {
      title: "Vue.js vs React: A Developer's Perspective",
      description: "Comparing two popular JavaScript frameworks from a practical development standpoint, with real-world examples.",
      date: "March 5, 2024",
      tags: ["Vue.js", "React", "JavaScript"],
      readTime: "12 min read",
    },
    {
      title: "Building Secure Document Management Systems",
      description: "Best practices and security considerations when developing document management platforms with sensitive data.",
      date: "February 28, 2024",
      tags: ["Security", "Backend", "Best Practices"],
      readTime: "15 min read",
    },
    {
      title: "The Power of Computer Vision in 2024",
      description: "How computer vision technology is evolving and its applications in various industries from healthcare to retail.",
      date: "February 20, 2024",
      tags: ["Computer Vision", "AI", "Technology"],
      readTime: "9 min read",
    },
    {
      title: "Spring Boot Microservices Architecture",
      description: "A deep dive into building scalable microservices with Spring Boot, covering patterns and practical implementations.",
      date: "February 15, 2024",
      tags: ["Java", "Spring Boot", "Microservices"],
      readTime: "14 min read",
    },
  ];

  return (
    <Container fluid className="blog-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Blog</strong>
        </h1>
        <p style={{ color: "white" }}>
          Thoughts, insights, and experiences from my development journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {blogs.map((blog, index) => (
            <Col md={6} lg={4} className="blog-card" key={index}>
              <BlogCard
                title={blog.title}
                description={blog.description}
                date={blog.date}
                tags={blog.tags}
                readTime={blog.readTime}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default Blog;
