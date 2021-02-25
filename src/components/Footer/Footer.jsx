import React, { useContext } from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import GithubButtons from '../GithubButtons/GithubButtons';

import { githubButtons } from '../../mock/data';
import Image from "../Image/Image";

const Footer = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;
  const { isEnabled } = githubButtons;

  return (
    <footer className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
          <Row className="about-wrapper">
              <Col className="footer-imgcol" md={6} sm={12}>
                  <Image
                      src="logoamber.svg"
                      className="mx-auto shadow-xl"
                      alt="Sunset Image"
                      style={{
                          border: 'none',
                      }}
                  />
              </Col>
              <Col md={6} sm={12}>
                    <span className="abn">ABN 63 108 986 731    </span>
              </Col>
          </Row>
      </Container>
    </footer>
  );
};

export default Footer;
