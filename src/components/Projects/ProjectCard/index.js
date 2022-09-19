import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Video2 from "../../../assets/videos/LightningHeader.mp4";

// import {
//   ImageWrapper,
//   DescriptionWrapper,
//   HeaderSection,
//   MainTitle,
//   SubTitle,
//   Content,
//   Image,
//   ButtonWrapper,
// } from "./CardElements";
// import { Button } from "../../ButtonElement";
function ProjectCard({ img, title, description, line, alt, website, repo }) {


  return (
    <Col className="CardCol">
      <Card
        className="text-center wholeCard"
        style={{ width: "27rem", height: "34rem" }}
      >
        <Card.Header className="cardHeader">
          <video autoPlay loop muted id="video" className="headerVid">
            <source src={Video2} type="video/mp4" />
          </video>
          <div className="cardTitle">{title}</div>
        </Card.Header>

        <Card.Img src={img} alt={alt} />

        <Card.Body>
          <Card.Subtitle>Technologies Used: {description}</Card.Subtitle>
          <br />
          <Card.Text>{line}</Card.Text>
          <>
          </>
        </Card.Body>
          <Card.Footer className="btnDiv">
            <Button className="AllBtn" as="a" href={website} target="_blank">
              Live App  
            </Button>
            <Button className="AllBtn" as="a" href={repo} target="_blank">
              Github Repo
            </Button>
          </Card.Footer>
         
          {/* )} */}
      </Card>
    </Col>
  );
}

export default ProjectCard;