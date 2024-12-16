import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import project1 from "../../Assets/Projects/project1.png";
import project2 from "../../Assets/Projects/project2.png";
import project3 from "../../Assets/Projects/project3.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project1}
              isBlog={false}
              title="project1"
              description="This project demonstrates my ability to create an engaging, modern frontend application with a strong focus on usability, reusability of components, and interactivity. It also showcases my understanding of React.js fundamentals, such as , component lifecycle, and routing. The site is designed with a user-first approach, ensuring that visitors have a smooth experience while browsing through my work."
              ghLink="https://github.com/bhuvanesh1233/project"
              demoLink="https://project-2knho42dg-buvaneswarans-projects.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project2}
              isBlog={false}
              title="Cart"
              description="This is a fully-functional e-commerce cart application built using the MERN stack (MongoDB, Express.js, React.js, Node.js,Redux). The application enables users to browse products, add items to the cart, manage quantities, and proceed to checkout. It incorporates a RESTful API to handle product and cart management, offering a seamless experience for online shopping."
              ghLink="https://github.com/bhuvanesh1233/cart"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={project3}
              isBlog={false}
              title="New College Registration Module"
              description="A responsive and user-friendly college registration form built using React.js for the frontend and Laravel for the backend. This application streamlines the process of affiliating new colleges with the university by allowing them to submit detailed institutional information efficiently."       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
