import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/portfolipic.png";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a motivated engineering student with a strong passion for
              software development, artificial intelligence, and building
              modern web applications.
              <br />
              <br />
              I am proficient in
              <i>
                <b className="purple">
                  {" "}
                  .NET, Java, Vue.js, React, Node.js, and Python{" "}
                </b>
              </i>
              - and I enjoy working across both backend and frontend stacks.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  AI Systems, Machine Learning, Computer Vision,{" "}
                </b>
              </i>
              and building microservices architecture solutions.
              <br />
              <br />
              My recent work includes building an AI-enhanced document management
              platform (<b className="purple">DocuVision</b>) capable of text extraction,
              summarization, object detection, and image generation.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;