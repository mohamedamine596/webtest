import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineCalendar, AiOutlineClockCircle } from "react-icons/ai";

function BlogCard({ title, description, date, tags, readTime }) {
  return (
    <Card className="blog-card-view">
      <Card.Body>
        <Card.Title style={{ fontWeight: "bold" }}>{title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", minHeight: "100px" }}>
          {description}
        </Card.Text>
        <div style={{ marginBottom: "10px" }}>
          {tags.map((tag, index) => (
            <span
              key={index}
              style={{
                display: "inline-block",
                backgroundColor: "#623686",
                color: "white",
                padding: "3px 10px",
                borderRadius: "12px",
                marginRight: "8px",
                marginBottom: "5px",
                fontSize: "0.85em",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: "0.9em", color: "#999" }}>
          <span>
            <AiOutlineCalendar style={{ marginRight: "5px" }} />
            {date}
          </span>
          <span>
            <AiOutlineClockCircle style={{ marginRight: "5px" }} />
            {readTime}
          </span>
        </div>
      </Card.Body>
    </Card>
  );
}

export default BlogCard;
