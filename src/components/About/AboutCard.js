import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi! I'm <span className="purple">Mohamed Amine Bouguiddima</span> —
            an engineering student who loves creating smart and modern applications.
            <br />
            <br />
            I'm passionate about <span className="purple">AI</span>,{" "}
            <span className="purple">web development</span>, and building tools
            that make people's lives easier.
            <br />
            <br />
            I enjoy learning new technologies and turning ideas into real projects.
            Whether I'm working on backend systems with{" "}
            <span className="purple">.NET</span> and{" "}
            <span className="purple">Java</span>, or building beautiful interfaces
            with <span className="purple">Vue.js</span> and{" "}
            <span className="purple">React</span>, I always focus on clean design
            and good performance.
            <br />
            <br />
            I'm also deeply interested in:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> AI Models & Machine Learning 🤖
            </li>
            <li className="about-activity">
              <ImPointRight /> Computer Vision & Document Processing 📄
            </li>
            <li className="about-activity">
              <ImPointRight /> Full-Stack Web Development 🌐
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I learn fast, adapt quickly, and love turning ideas into real, impactful solutions."{" "}
          </p>
          <footer className="blockquote-footer">Mohamed Amine</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
