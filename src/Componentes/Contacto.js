import { React, useState, useRef } from "react";
import { Footer } from "./Footer";
import { Container, Row, Col, Form, Button } from "reactstrap";
import { useFirebaseApp } from "reactfire";

export const Contacto = () => {
  const [alerta, setAlerta] = useState("#034ea2");

  const nombre = useRef();
  const correo = useRef();
  const asunto = useRef();
  const mensaje = useRef();

  const firebase = useFirebaseApp();
  const database = firebase.firestore();

  const currentDay = (dia) => {
    switch (dia) {
      case 1:
        return "L";
      case 2:
        return "M";
      case 3:
        return "Mi";
      case 4:
        return "j";
      case 5:
        return "V";
      case 6:
        return "S";
      case 7:
        return "D";
      default:
        return "";
    }
  };

  const fecha = new Date();
  const fileName = `${currentDay(fecha.getDay())}-${fecha.getDate()}.${
    fecha.getMonth() + 1
  }.${fecha.getFullYear()} H-${fecha.getHours()}:${fecha.getMinutes()}:${fecha.getSeconds()}`;

  const clearFields = () => {
    nombre.current.value = "";
    correo.current.value = "";
    asunto.current.value = "";
    mensaje.current.value = "";
  };

  const getDatos = () => {
    const datos = {
      nombre: nombre.current.value,
      correo: correo.current.value,
      asunto: asunto.current.value,
      mensaje: mensaje.current.value,
    };
    if (
      datos.nombre === "" ||
      datos.correo === "" ||
      datos.asunto === "" ||
      datos.mensaje === ""
    ) {
      cambiarColor("#da0606", "#034ea2");
    } else {
      database
        .collection("UsersMessages")
        .doc(fileName)
        .set({
          Mensajes: datos,
        })
        .then(() => {
          clearFields();
          cambiarColor("#1fac03", "#034ea2");
        })
        .catch((e) => console.log(e, "Ocurrio un error al guardar"));
    }
  };

  const cambiarColor = (iColor, fColor) => {
    setAlerta(iColor);
    setTimeout(() => {
      setAlerta(fColor);
    }, 1000);
  };

  return (
    <>
      <Container className="my-3 my-md-4">
        <Row>
          <Col className="col-12 py-3">
            <small className="h2 text-uppercase text-muted">Contáctanos</small>
            <p className="h2 d-none d-md-block">
              Estamos aquí para responder a todas tus solicitudes.
            </p>
          </Col>
          <Col className="col-12">
            <Form
              className="form pt-2 rounded"
              style={{ backgroundColor: alerta }}
            >
              <Row className="m-md-3 m-1 justify-content-center">
                <Col className="col-md-6 col-12">
                  <input
                    ref={nombre}
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3 form-control"
                    placeholder="Nombre/Empresa"
                    type="text"
                  />
                  <input
                    ref={correo}
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3 form-control"
                    placeholder="E-mail"
                  />
                  <input
                    ref={asunto}
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3 form-control"
                    placeholder="Asunto"
                  />
                  <textarea
                    ref={mensaje}
                    style={{ height: "70px", fontSize: "20px" }}
                    className="my-3 form-control"
                    placeholder="Mensajes"
                  />
                  <Button
                    color="success"
                    onClick={() => getDatos()}
                    className="w-50 py-3 my-3 border"
                  >
                    Enviar
                  </Button>
                </Col>
              </Row>
            </Form>
          </Col>
        </Row>
      </Container>
    </>
  );
};
