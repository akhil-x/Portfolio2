import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">AKHIL K B </span>
            from <span className="purple"> Kerala, India.</span>
            <br />
            <br />
            I am currently a studying <span className="purple">Bachelor In Computer Application</span> at KMM College of Arts and Science.
            <br />
            <br />
            I have completed <span className="purple">Plus Two in Computer Science </span>at Govt. Boys High School, Aluva.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Bodybuilding & Boxing
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Books
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Akhil</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
