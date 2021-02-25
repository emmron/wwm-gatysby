import React, { useContext, useState, useEffect } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Image from "../Image/Image";

const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

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
    <section id="hero" className="jumbotron">
      <Container>

        <Row className="hero-img">
          <Col className="hero-imgcol" md={12} sm={12}>
            <Image
                src="logoamber.svg"
                className="mx-auto shadow-xl"
                alt="Sunset Image"
                style={{
                  border: 'none',
                }}
            />
          </Col>
        </Row>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <h1 className="hero-title">
            <span className="text-color-main">{name || 'Building premium websites with an appreciation for the craft'}</span>
            <span className="subtitle">{subtitle || "Website Builds of the highest Caliber"}</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <p className="hero-cta">
            <span className="cta-btn cta-btn--hero">
              <Link to="about" smooth duration={1000}>
                {cta || 'Contact Us Today!'}
              </Link>
            </span>
          </p>
        </Fade>
      </Container>
    </section>
  );
};

export default Hero;
