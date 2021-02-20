import { React, useState } from "react";

import { Inicio } from "./Inicio";
import { Servicios } from "./Servicios";
import { Nosotros } from "./Nosotros";
import { Contacto } from "./Contacto";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Navbar, Collapse, NavbarToggler, NavItem, Nav } from "reactstrap";

export const Navegacion = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Router>
      <Navbar expand="lg" className="py-md-2 navBar container-fluid sticky-top">
        <Link to="/" className="py-3 mx-4 text-decoration-none link">
          <FontAwesomeIcon icon={faLaptopCode} size="2x" />
          <span className="h3">UltraWeb</span>
        </Link>
        <NavbarToggler onClick={toggle}>
          <FontAwesomeIcon icon={faBars} color="white" />
        </NavbarToggler>
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem className="py-2">
              <Link
                className="mx-3 h6 text-decoration-none link"
                to="/servicios"
              >
                Servicios
              </Link>
            </NavItem>
            <NavItem className="py-2">
              <Link
                className="mx-3 h6 text-decoration-none link"
                to="/nosotros"
              >
                Nosotros
              </Link>
            </NavItem>
            <NavItem className="py-2">
              <Link
                className="mx-3 h6 text-decoration-none link"
                to="/contacto"
              >
                Contáctanos
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>

      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/servicios">
          <Servicios />
        </Route>
        <Route path="/nosotros">
          <Nosotros />
        </Route>
        <Route path="/contacto">
          <Contacto />
        </Route>
      </Switch>
    </Router>
  );
};
