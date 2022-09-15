import React from "react";
import ProjectCard from "./ProjectCard";
import {projects} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";


function Projects() {


  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">My Projects</h3>
      </Row>
      <Row className="CardRow">
{projects.map(project => {
  return <ProjectCard key={project.title} {...project}/>
})}
      </Row>
    </Container>
  );
}

export default Projects;
