import { React, useState } from "react";
import {
  Component1,
  Component2,
  Component3,
} from "./ServiceComponents/Component";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Container, Row, Col, Collapse } from "reactstrap";
import { Footer } from "./Footer";
import { FaAngleDown, FaCloud, FaCode, FaElementor } from "react-icons/fa";

export const Servicios = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openCollapse = () => setIsOpen(!isOpen);

  return (
    <>
      <Container>
        <Router>
          <Row className="justify-content-center">
            <FaAngleDown
              size="2em"
              onClick={() => openCollapse()}
              className="openCollapse fixed-top text-white"
            />
            <Collapse
              onMouseLeave={() => openCollapse()}
              className="position-absolute border col-12 py-3 color"
              isOpen={isOpen}
              toggle={openCollapse}
            >
              <Row>
                <Col>
                  <Link className="h5 text-decoration-none link" to="/servicios">
                    <FaCode size="2em"/>
                    <p>Creación de WebSites</p>
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="h5 text-decoration-none link"
                    to="/servicios/ux-ui"
                  >
                    <FaElementor size="2em"/>
                    <p>Servicios de UX/UI</p>
                  </Link>
                </Col>
                <Col>
                  <Link
                    className="h5 text-decoration-none link"
                    to="/servicios/cloud-computing"
                  >
                    <FaCloud size="2em"/>
                    <p>Cloud computing</p>
                  </Link>
                </Col>
              </Row>
            </Collapse>

            <Switch>
              <Route exact path="/servicios" component={Component1} />
              <Route path="/servicios/ux-ui" component={Component2} />
              <Route path="/servicios/cloud-computing" component={Component3} />
            </Switch>
          </Row>
        </Router>
      </Container>

      <Footer  footerProps="container-fluid footerSection py-2"/>
    </>
  );
};
