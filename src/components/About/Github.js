import React from "react";
import { Row, Col } from "react-bootstrap";

function Github() {
  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        paddingTop: "50px",
      }}
    >
      <Col md={12} style={{ textAlign: "center" }}>
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="purple">Code</strong>
        </h1>
        <a
          href="https://github.com/mohamedamine596"
          target="_blank"
          rel="noreferrer"
          style={{ textDecoration: "none" }}
        >
          <img
            src="https://ghchart.rshah.org/c084f5/mohamedamine596"
            alt="GitHub Contribution Chart"
            style={{ width: "100%", maxWidth: "900px" }}
          />
        </a>
      </Col>
    </Row>
  );
}

export default Github;
