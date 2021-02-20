import { React } from "react";
import { Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';

export const Footer = () => {
  return (
    <section className="container-fluid footerSection py-3">
      <Row>
        <Col className="text-md-left text-white col-md-8 col-sm-12 ml-md-5">
          <FontAwesomeIcon icon={faLaptopCode} size="4x" className="ml-md-5" />
          <span className="h2">UltraWeb</span>
          <p className="mx-4 col-md-4 py-1 footerMsg">
            Somos expertos en React, Desarrollo Web, Firebase!
          </p>
        </Col>
        <Col className="text-md-left text-sm-center text-white col-md-3 col-12">
            <p className="mr-5 h3 contactFooterLabel">Contáctanos</p>
            <Col>
                <MdEmail size="2em" />
                <span>Breiydl@gmail.com</span>
            </Col>
            <Col className="py-0">
                <MdPhoneAndroid size="2em" />
                <span>809-252-6353</span>
            </Col>
        </Col>
      </Row>
    </section>
  );
};
