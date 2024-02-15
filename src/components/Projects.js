import React from 'react';
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/1693190469944.jpg";
import projImg3 from "../assets/img/istockphoto-540983728-612x612.jpg";
import projImg2 from "../assets/img/gettyimages-1311966784-612x612.jpg";
import projImg4 from "../assets/img/3.jpg";
import projImg5 from "../assets/img/google-photos.jpg";
import projImg6 from "../assets/img/Screenshot (18).png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Airline Management System",
      description: "C and System calls",
      imgUrl: projImg1,
      link:""
    },
    {
      title: "Chat App",
      description: "Django Framework",
      imgUrl: projImg2,
      link:""
    },
    {
      title: "Job Finder App",
      description: "Web Scraping with Python",
      imgUrl: projImg3,
      link:""
    },
  ];
  const projects2=
  [ {
      title: "MIPS Assembler and Processor",
      description: "Python ",
      imgUrl: projImg4,
      link:""
    },
    {
      title: "Photo Editer App",
      description: "Angular and Spring Boot",
      imgUrl: projImg5,
      link:""
    },
    {
      title: "Portfolio Website",
      description: "React JS and Bootstrap",
      imgUrl: projImg6,
      link:""
    },

  
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      {/* <p>In Progress...</p> */}
                      <Row>
                        {
                          projects2.map((projects2, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...projects2}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Coming soon...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
