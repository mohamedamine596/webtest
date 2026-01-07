import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  const [filter, setFilter] = useState("All");

  console.log("Current filter:", filter);

  const projects = [
    {
      imgPath: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=300&fit=crop",
      title: "Document Management Platform",
      description: "A C# project for a document management platform that helps users manage their documents securely. Features include AI-powered document summarization, complex image description, and text-to-image generation using advanced AI models.",
      ghLink: "https://github.com/mohamedamine596/documentplatform-backend",
      tags: ["C#", "AI", ".NET"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=300&fit=crop",
      title: "Document Platform Frontend",
      description: "Web frontend built with Vue.js for the document management platform. Provides an intuitive interface for users to upload, manage, and process documents with AI-powered features including summarization and image analysis.",
      ghLink: "https://github.com/mohamedamine596/Frontend",
      tags: ["Vue.js", "JavaScript"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=400&h=300&fit=crop",
      title: "Text to Image Generator",
      description: "AI-powered application using Stable Diffusion integrated into a web page that helps users generate high-quality images from text prompts. Built with Python for creative content generation.",
      ghLink: "https://github.com/mohamedamine596/textimages",
      tags: ["Python", "AI"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
      title: "Model AI - PDF Image Extractor",
      description: "AI project that extracts images from PDF documents and generates contextual descriptions for each extracted image using an AI-based object detection model. Built with Python for intelligent document analysis.",
      ghLink: "https://github.com/mohamedamine596/model-ai",
      tags: ["Python", "AI"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=400&h=300&fit=crop",
      title: "RentacarMobile",
      description: "A mobile application built with Java that helps users rent cars in an easy and convenient way. Features include car browsing, booking management, and real-time availability with a user-friendly interface.",
      ghLink: "https://github.com/mohamedamine596/RentacarMobile",
      tags: ["Java", "Mobile"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      title: "Advanced E-Commerce Platform",
      description: "Advanced e-commerce project using Spring Boot and React. Demonstrates Service-Oriented Architecture, microservices patterns, secure payment integration, and modern web development best practices.",
      ghLink: "https://github.com/mohamedamine596/SoaProject",
      tags: ["Java", "React", "Spring Boot"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=300&fit=crop",
      title: "E-Commerce Servlet",
      description: "Basic e-commerce application built with Jakarta EE using Servlets. Features include product catalog, shopping cart functionality, and user management with traditional Java web technologies.",
      ghLink: "https://github.com/mohamedamine596/EcommerceServlet",
      tags: ["Java"]
    },
    {
      imgPath: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=300&fit=crop",
      title: "Computer Price Predictor",
      description: "Machine learning project that trains a model using a dataset to predict computer prices based on specifications. Demonstrates data analysis, model training, and predictive analytics using Python and AI techniques.",
      ghLink: "https://github.com/mohamedamine596/predict-price-computer-IA-",
      tags: ["Python", "AI"]
    }
  ];

  const filters = ["All", "Java", "Python", "React", "Vue.js", "AI", "C#"];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  console.log("Filtered projects count:", filteredProjects.length);
  console.log("Filtered projects:", filteredProjects.map(p => p.title));

  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I have worked on recently.
        </p>
        
        <div style={{ textAlign: "center", marginBottom: "30px", position: "relative", zIndex: 10 }}>
          {filters.map((tech) => (
            <Button
              key={tech}
              variant={filter === tech ? "primary" : "outline-primary"}
              style={{
                margin: "5px",
                backgroundColor: filter === tech ? "#623686" : "transparent",
                borderColor: "#c770f0",
                color: filter === tech ? "white" : "#c770f0",
                fontWeight: filter === tech ? "bold" : "normal",
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("Filter clicked:", tech);
                setFilter(tech);
              }}
            >
              {tech}
            </Button>
          ))}
        </div>

        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <Col md={4} className="project-card" key={index}>
                <ProjectCard
                  imgPath={project.imgPath}
                  isBlog={false}
                  title={project.title}
                  description={project.description}
                  ghLink={project.ghLink}
                />
              </Col>
            ))
          ) : (
            <Col>
              <p style={{ color: "white", textAlign: "center", fontSize: "1.2em" }}>
                No projects found for this filter.
              </p>
            </Col>
          )}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;