import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import ProjectImg from '../Image/ProjectImg';
import Image from "../Image/Image";

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
      <section id="projects">
        <Container>
          <Title title="Our Websites Run Like Ferrari's, they're fast" />
          <Row className="about-wrapper">
            <Col md={6} sm={12}>
              <Fade bottom duration={1000} delay={600} distance="30px">
                <div className="about-wrapper__image">
                  <Image
                      src="ferrari.png"
                      className="mx-auto shadow-xl"
                      alt="Sunset Image"
                      style={{
                        border: 'none',
                        height: '225px',
                        position: 'relative',
                        top: '24px'
                      }}
                  />
                </div>
              </Fade>
            </Col>
            <Col md={6} sm={12}>
                <Fade bottom duration={1000} delay={600} distance="30px">

                <Image
                    src="fast.PNG"
                    className="mx-auto shadow-xl"
                    alt="Sunset Image"
                    style={{
                        border: 'none',
                        height: '225px',
                        position: 'relative',
                        top: '24px'
                    }}
                />
                </Fade>

            </Col>
          </Row>
        </Container>
      </section>
  );
};

export default Projects;
