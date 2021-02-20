import { React, useState } from "react";

import { Footer } from "./Footer";
import { DetailedService } from "./Servicios/DetailedService";
import { Technologies } from "./Servicios/Technologies";
import { Carrusel } from "./Servicios/Carrusel";

import {
  Row,
  Col,
  Container,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCode,
  faDesktop,
  faCloud,
  faCloudUploadAlt,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

export const Inicio = () => {
  const [spinMainLogo, setSpinMainLogo] = useState(false);

  const [spinSolutionLogo1, setSpinSolutionLogo1] = useState(false);
  const [spinSolutionLogo2, setSpinSolutionLogo2] = useState(false);
  const [spinSolutionLogo3, setSpinSolutionLogo3] = useState(false);

  const toggle = (logoN, setLogoN = Boolean) => {
    !logoN ? setLogoN(true) : setLogoN(false);
  };

  const [currentlyActive, setCurrentlyActive] = useState(1);

  const changeView = (current) => {
    setCurrentlyActive(current);
  };

  const selectView = () => {
    if (currentlyActive === 1) {
      return (
        <DetailedService
          tittle="Creación de WebSites"
          paragraph2="Completamente en el arte de la ciencia de la ingeniería y gestión de
        software, le ayudamos a crear soluciones y productos de la mejor
        calidad, también le ofrecemos una amplia gama de servicios
        profesionales relacionados al área."
          paragraph1="Diseñe y actualice sus sitios web con nosotros siempre trabajando con
        la mejor calidad del mercado y las últimas tecnologías para que
        nuestros trabajos esten a la vanguardia."
          mainSpan="Le ayudaremos con:"
          span1="Definir sus ideas para su proyecto"
          span2="Identificar y priorizar sus reuqerimientos"
          span3="Evaluar riesgos y presupuesto"
          span4="Asesoría en la optimización del producto"
          span5=" Diseño de la arquitectura de software para una mayor
                eficiencia y productividad."
          span6="Asegurar la calidad y cumplimiento de su producto"
          imageSource="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Servicios%2Fdesarrollo.jpg?alt=media&token=fea33fc0-7554-4062-ba74-72caff1794de"
        />
      );
    } else if (currentlyActive === 2) {
      return (
        <DetailedService
          tittle="Servicios de UX/UI"
          paragraph2="Ofrecemos servicios de desarrollo de UI/UX de primer nivel. Dándole un 
          aspecto llamativo a sus proyectos, aumentando así la interacción con el usuario y por 
          consiguiente impulsando las ventas."
          paragraph1="Siempre hemos aspirado a crear soluciones simples, fáciles de usar e 
          intuitivas para nuestros clientes. Es por eso que la mejora de la experiencia del 
          usuario es una de las tareas más importantes para nuestro equipo."
          mainSpan="Nuestro proceso:"
          span1="Análisis y proceso de investigación"
          span2="Conceptualización"
          span3="Elaboración de wireframes de UX"
          span4="Elaboración de prototipos"
          span5="Desarrollo de prototipos"
          span6="Prueba de la interfaz"
          imageSource="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Servicios%2Fux.png?alt=media&token=37543938-2609-40e1-82f6-91403d89da76"
        />
      );
    } else if (currentlyActive === 3) {
      return (
        <DetailedService
          tittle="Cloud Computing"
          paragraph1="La tecnología del Cloud Computing lleva un tiempo entre nosotros, 
          tanto en el ámbito particular, como en el sector profesional."
          paragraph2="En el campo empresarial, se habla mucho de conceptos como computación 
          en la nube, escalabilidad o ubicuidad, pero a veces se hace difícil concretar 
          qué servicios ofrece el Cloud Computing realmente a las empresas y qué beneficios aportan."
          mainSpan="Servicios:"
          span1="Diseño y desarrollo de infraestructura en la nube."
          span2="Diseño de escritorios virtuales."
          span3="Integración de la nube privada e híbrida."
          span4="Administración de copias de seguridad"
          span5="Manejo de bases de datos"
          span6="Almacenaje y transferencia de archivos."
          imageSource="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Servicios%2Fcloud.png?alt=media&token=a6b78ecd-374d-4c21-92b9-dd4083a3f7a3"
        />
      );
    }
  };

  return (
    <>
      <Container>
        <Row className="homeSection  justify-content-center">
          <Col className="my-auto col-md-5 col-10">
            <p className="h2 text-sm-center text-md-left text-uppercase">
              Diseñando tu web de la manera mas rápida y con la mejor calidad
            </p>
            <p className="text-sm-center text-md-left">
              Nuestros servicios te ayudarán a mostrar tu imagen en la Web
            </p>
          </Col>
          <Col className="my-auto toggleLogo">
            <FontAwesomeIcon
              onMouseEnter={() => toggle(spinMainLogo, setSpinMainLogo)}
              onMouseLeave={() => toggle(spinMainLogo, setSpinMainLogo)}
              icon={faLaptopCode}
              size="10x"
              className="w-50 h-25 logoColor"
              spin={spinMainLogo}
            />
          </Col>
        </Row>
        <Row>
          <Col className="solutionsSection">
            <Row>
              <Col className=" col-12 py-5">
                <small className="h5 text-uppercase text-muted">
                  Desarrollo web
                </small>
                <p className="h2 texto">Soluciones para todos los proyectos</p>
                <p className="col-10 mx-auto pt-4">
                  Reproducir diseños y aplicaciones dinámicas y de calidad para
                  satisfacer a nuestros usuarios es nuestro objetivo principal,
                  esto con el fin de ser una empresa reconocida en el area de
                  desarrollo web a nivel mundial.
                </p>
              </Col>
              <Col className="col-12 col-md-4  mt-5">
                <Card
                  className="carta h-100"
                  onMouseEnter={() =>
                    toggle(spinSolutionLogo1, setSpinSolutionLogo1)
                  }
                  onMouseLeave={() =>
                    toggle(spinSolutionLogo1, setSpinSolutionLogo1)
                  }
                >
                  <CardBody>
                    <FontAwesomeIcon
                      icon={faCode}
                      size="4x"
                      className="logoColor"
                      spin={spinSolutionLogo1}
                    />
                  </CardBody>
                  <CardTitle tag="h5">Gestión de diseño</CardTitle>
                  <CardBody>
                    <CardText>
                      Transformamos la forma de soportar al negocio con un
                      modelo preventivo e innovador que permite liberar la carga
                      de trabajo de soporte de aplicaciones y tecnologías de la
                      información a la empresa.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-12 col-md-4  mt-5">
                <Card
                  className="carta h-100"
                  onMouseEnter={() =>
                    toggle(spinSolutionLogo2, setSpinSolutionLogo2)
                  }
                  onMouseLeave={() =>
                    toggle(spinSolutionLogo2, setSpinSolutionLogo2)
                  }
                >
                  <CardBody>
                    <FontAwesomeIcon
                      icon={faMobileAlt}
                      size="4x"
                      className="logoColor"
                      spin={spinSolutionLogo2}
                    />
                  </CardBody>
                  <CardTitle tag="h5">Diseño responsivo</CardTitle>
                  <CardBody>
                    <CardText>
                      Acoplamos nuestros diseños a todo tipo de dispositivo
                      para que los sitios puedan ser vistos desde cualquier
                      parte sin problema alguno.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
              <Col className="col-12 col-md-4  mt-5">
                <Card
                  className="carta h-100"
                  onMouseEnter={() =>
                    toggle(spinSolutionLogo3, setSpinSolutionLogo3)
                  }
                  onMouseLeave={() =>
                    toggle(spinSolutionLogo3, setSpinSolutionLogo3)
                  }
                >
                  <CardBody>
                    <FontAwesomeIcon
                      icon={faCloudUploadAlt}
                      size="4x"
                      className="logoColor"
                      spin={spinSolutionLogo3}
                    />
                  </CardBody>
                  <CardTitle tag="h5">Gestión de carga a la nube</CardTitle>
                  <CardBody>
                    <CardText>
                      Administramos todos los servicios que se necesite subir a la
                      nube para su gestión, estos servicios se incluyen en los planes
                      de hosting web, esto facilita que los datos siempre esten
                      presentes y de la manera mas rápida posible.
                    </CardText>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <section className="container-fluid servicesSection my-5">
        <Row>
          <Col className="col-12 py-3">
            <small className="h5 text-uppercase text-muted">
              Nuestros servicios
            </small>
            <p className="h2">Satisfaciendo todas sus necesidades</p>
          </Col>
        </Row>
        <Container>
          <Row>
            <Col className=" col-12 col-md-4">
              <Button
                id="boton"
                onClick={() => changeView(1)}
                className="col-3 col-md-10 mx-1 mx-md-0 my-2 pl-3 py-3 py-md-5"
              >
                <FontAwesomeIcon icon={faCode} />
                <span className="h5 mx-2 serviceButton">
                  Creación de WebSites
                </span>
              </Button>
              <Button
                id="boton"
                onClick={() => changeView(2)}
                className="col-3 col-md-10 mx-1 mx-md-0 my-2 py-3 py-md-5"
              >
                <FontAwesomeIcon icon={faDesktop} />
                <span className="h5 mx-2 serviceButton">
                  Servicios de UX/UI
                </span>
              </Button>
              <Button
                id="boton"
                onClick={() => changeView(3)}
                className="col-3 col-md-10 mx-1 mx-md-0 my-2 py-3 py-md-5"
              >
                <FontAwesomeIcon icon={faCloud} />
                <span className="h5 mx-2 serviceButton">Cloud Computing</span>
              </Button>
            </Col>
            <Col className="mb-3">{selectView()}</Col>
          </Row>
        </Container>
      </section>
      <Container className="technologiesSection ">
        <Row>
          <Col className=" col-12 py-4 mb-5">
            <small className="h5 text-uppercase text-muted">Tecnologias</small>
            <p className="h2">Siempre el lado de la innovación</p>
          </Col>
          <Technologies />
        </Row>
      </Container>
      <Container className="pagesSection  my-5">
        <Row>
          <Col className=" col-12 py-4 mb-3">
            <small className="h5 text-uppercase text-muted">Proyectos</small>
            <p className="h2">Sitios Web desarrollados.</p>
          </Col>
          <Carrusel />
        </Row>
      </Container>
      <Footer />
    </>
  );
};
