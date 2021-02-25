import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
import Title from '../Title/Title';
import HeaderImg from '../Image/LogoImg';
import PortfolioContext from '../../context/context';
import {headerData} from "../../mock/data";
import Image from '../Image/Image';

const Header = () => {
    const { header } = useContext(PortfolioContext);
    const { img } = headerData.img;

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
        <section id="Header">
            <Container>
                <Row className="Header-wrapper">
                    <Col md={6} sm={12}>
                        <Image
                            src="logoamber.svg"
                            className="mx-auto shadow-xl"
                            alt="Sunset Image"
                            style={{
                                border: 'none',
                                height: '134px',
                                position: 'absolute',
                                left: '-12px',
                                top: '-27px'
                            }}
                        />                    </Col>
                    <Col md={6} sm={12}>

                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Header;
