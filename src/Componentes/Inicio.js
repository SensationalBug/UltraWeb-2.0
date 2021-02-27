import { React, useState } from "react";

import { Footer } from "./Footer";
import { Carrusel } from "./BackgroundComponents/Carrusel";
import { ServiceCardHome } from "./BackgroundComponents/ServiceCard";
import { Technologies } from "./BackgroundComponents/Technologies";
import { ServiceButton } from "./BackgroundComponents/ServiceButton";
import { DetailedService } from "./BackgroundComponents/DetailedService";
import { Titular, SmallTitle } from "./BackgroundComponents/Titular";

import { Row, Col, Container } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLaptopCode,
  faCode,
  faDesktop,
  faCloud,
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
        <Row className="homeSection justify-content-center">
          <Titular
            title="Diseñando tu web de la manera mas rápida y con la mejor calidad"
            subTitle="Nuestros servicios te ayudarán a mostrar tu imagen en la Web"
          />
          <Col className="my-auto toggleLogo col-md-6 col-12">
            <FontAwesomeIcon
              onMouseEnter={() => toggle(spinMainLogo, setSpinMainLogo)}
              onMouseLeave={() => toggle(spinMainLogo, setSpinMainLogo)}
              icon={faLaptopCode}
              size="10x"
              className="logoColor"
              spin={spinMainLogo}
            />
          </Col>
        </Row>
      </Container>

      <Container className="solutionsSection">
        <Row className="mt-5">
          <SmallTitle
            title="Desarrollo web"
            subTitle="Soluciones para todos los proyectos"
          />
          <p className="col-10 mx-auto pt-0">
            Reproducir diseños y aplicaciones dinámicas y de calidad para
            satisfacer a nuestros usuarios es nuestro objetivo principal, esto
            con el fin de ser una empresa reconocida en el area de desarrollo
            web a nivel mundial.
          </p>
          <ServiceCardHome
            enter={() => toggle(spinSolutionLogo1, setSpinSolutionLogo1)}
            out={() => toggle(spinSolutionLogo1, setSpinSolutionLogo1)}
            icono={faCode}
            spin={spinSolutionLogo1}
            title="Gestión de diseño"
            subTitle="Transformamos la forma de soportar al negocio con un
                  modelo preventivo e innovador que permite liberar la carga
                  de trabajo de soporte de aplicaciones y tecnologías de la
                  información a la empresa."
          />
          <ServiceCardHome
            enter={() => toggle(spinSolutionLogo2, setSpinSolutionLogo2)}
            out={() => toggle(spinSolutionLogo2, setSpinSolutionLogo2)}
            icono={faMobileAlt}
            spin={spinSolutionLogo2}
            title="Diseño responsivo"
            subTitle="Acoplamos nuestros diseños a todo tipo de dispositivo para
                que los sitios puedan ser vistos desde cualquier parte sin
                problema alguno. En UltraWeb utlizamos las mejores tecnologías para 
                el diseño responsivo."
          />
          <ServiceCardHome
            enter={() => toggle(spinSolutionLogo3, setSpinSolutionLogo3)}
            out={() => toggle(spinSolutionLogo3, setSpinSolutionLogo3)}
            icono={faCloud}
            spin={spinSolutionLogo3}
            title="Gestión de carga a la nube"
            subTitle="Administramos todos los servicios que se necesite subir a
                la nube para su gestión, estos servicios se incluyen en
                los planes de hosting web, esto facilita que los datos
                siempre esten presentes y de la manera mas rápida."
          />
        </Row>
      </Container>

      <section className="container-fluid servicesSection my-5">
        <Row className="py-4">
          <SmallTitle
            title="Nuestros servicios"
            subTitle="Satisfaciendo todas sus necesidades"
          />
        </Row>
        <Container>
          <Row>
            <Col className=" col-12 col-md-4">
              <ServiceButton
                click={() => changeView(1)}
                icon={faCode}
                title="Creación de WebSites"
              />
              <ServiceButton
                click={() => changeView(2)}
                icon={faDesktop}
                title="Servicios de UX/UI"
              />
              <ServiceButton
                click={() => changeView(3)}
                icon={faCloud}
                title="Cloud Computing"
              />
            </Col>
            <Col className="mb-3">{selectView()}</Col>
          </Row>
        </Container>
      </section>

      <Container className="technologiesSection ">
        <Row>
          <SmallTitle
            title="Tecnologias"
            subTitle="Siempre el lado de la innovación"
          />
          <Technologies />
        </Row>
      </Container>

      <Container className="pagesSection my-5">
        <Row>
          <SmallTitle title="Proyectos" subTitle="Sitios Web desarrollados" />
          <Carrusel />
        </Row>
      </Container>

      <Footer footerProps="container-fluid footerSection py-2"/>
    </>
  );
};
