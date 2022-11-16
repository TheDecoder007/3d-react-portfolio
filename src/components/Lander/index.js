import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import "../../assets/index.css";
import "./style.css";
import pdf from "../../assets/photos/Metaverse_Resume.pdf";

// import { Link } from "react-router-dom";

export function Lander() {
  return (
    <Container fluid className="landerContainer">
      <Row>
        <Col>
          <h1 className="landerTitle"> The Decoder </h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <h2 className="landerSub"> Welcome to my portfolio </h2>
        </Col>
      </Row>
      <Row>
        <Col>
          <h3 className="landerText">
            {" "}
            Passionate about web3, Metaverse development, building apps, and
            constantly expanding my knowledge of coding languages. Successful
            projects include Metaverse builds for Samsung, SandStorm.co, Wall
            Street Bets, and many other clients. Experience with full MERN
            stack, RESTfull apps, API's, React-Threes, and more! Click the
            button to go to my onliine portfolio, built with React.{" "}
          </h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            className="LandBtn"
            as="a"
            target="_blank"
            href="https://github.com/TheDecoder007"
          >
            My GitHub
          </Button>
          <Button
            className="LandBtn"
            as="a"
            target="_blank"
            href="https://thedecoder007.github.io/my-portfolio"
          >
            My Portfolio
          </Button>
          <Button className="LandBtn" as="a" target="_blank" href={pdf}>
            My Resume
          </Button>
        </Col>
      </Row>
    </Container>
  );
}
