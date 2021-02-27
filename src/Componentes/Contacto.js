import { React } from "react";
import { Footer } from "./Footer";
import { Container, Row, Col, Form, Input, Button } from "reactstrap";
// import "../CSS/Contacto.css";

export const Contacto = () => {
  return (
    <>
      <Container className="contactSection my-3 my-md-4">
        <Row>
          <Col className="col-12 py-3">
            <small className="h2 text-uppercase text-muted">Contáctanos</small>
            <p className="h2 d-none d-md-block">
              Estamos aquí para responder a todas tus solicitudes.
            </p>
          </Col>
          <Col className="col-12">
            <Form className="form pt-2" style={{ backgroundColor: "#034ea2" }}>
              <Row className="m-md-3 m-1 justify-content-center">
                <Col className="col-md-6 col-12">
                  <Input
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3"
                    placeholder="Nombre/Empresa"
                  />
                  <Input
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3"
                    placeholder="E-mail"
                  />
                  <Input
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3"
                    placeholder="Asunto"
                  />
                  <textarea
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3 form-control"
                    placeholder="Mensajes"
                  />
                  <Button color="success" className="w-50 py-3 my-3 border">
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};
