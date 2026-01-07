import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import { AiOutlineDownload, AiOutlineEye } from "react-icons/ai";
import { Document, Page, pdfjs } from "react-pdf";
import pdf from "../../Assets/Mohamed-Amine-Bouguiddima-CV.pdf";

// Configure PDF.js worker
pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

function ResumeNew() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [width, setWidth] = useState(window.innerWidth);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scale = width > 786 ? 1.5 : 0.6;

  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
            My <strong className="purple">Resume</strong>
          </h1>
        </Row>

        <Row style={{ justifyContent: "center", position: "relative", marginBottom: "30px" }}>
          <Col md="auto" style={{ paddingBottom: "10px" }}>
            <Button
              variant="primary"
              href={pdf}
              target="_blank"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineEye />
              &nbsp;View Full Screen
            </Button>
          </Col>
          <Col md="auto">
            <Button
              variant="primary"
              href={pdf}
              download="Mohamed-Amine-Bouguiddima-CV.pdf"
              style={{ maxWidth: "250px" }}
            >
              <AiOutlineDownload />
              &nbsp;Download CV
            </Button>
          </Col>
        </Row>

        <Row className="resume" style={{ justifyContent: "center" }}>
          <Document
            file={pdf}
            onLoadSuccess={onDocumentLoadSuccess}
            className="d-flex justify-content-center"
          >
            <Page pageNumber={pageNumber} scale={scale} />
          </Document>
        </Row>

        {numPages && numPages > 1 && (
          <Row style={{ justifyContent: "center", marginTop: "20px" }}>
            <Col md="auto">
              <div style={{ color: "white", textAlign: "center" }}>
                <Button
                  variant="outline-primary"
                  disabled={pageNumber <= 1}
                  onClick={() => setPageNumber(pageNumber - 1)}
                  style={{ marginRight: "10px" }}
                >
                  Previous
                </Button>
                <span style={{ margin: "0 20px" }}>
                  Page {pageNumber} of {numPages}
                </span>
                <Button
                  variant="outline-primary"
                  disabled={pageNumber >= numPages}
                  onClick={() => setPageNumber(pageNumber + 1)}
                  style={{ marginLeft: "10px" }}
                >
                  Next
                </Button>
              </div>
            </Col>
          </Row>
        )}
      </Container>
    </div>
  );
}

export default ResumeNew;