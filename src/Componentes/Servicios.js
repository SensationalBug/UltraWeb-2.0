import { React, useState } from "react";

import { Titular, SmallTitle } from "./BackgroundComponents/Titular";
import { ServiceCard } from "./BackgroundComponents/ServiceCard";
import { Competencias } from "./BackgroundComponents/Competencias";
import { Footer } from "./Footer";

import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChalkboard,
  faClipboardCheck,
  faCode,
  faUserTie,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaCss3,
  FaDocker,
  FaHtml5,
  FaJenkins,
  FaJs,
  FaNode,
  FaWordpressSimple,
} from "react-icons/fa";

export const Servicios = () => {
  const [isSpinning, setSpinning] = useState(false);
  const toggle = () => setSpinning(!isSpinning);
  return (
    <>
      <Container className="">
        <Row className="homeSection  justify-content-center">
          <Col className="my-auto toggleLogo">
            <FontAwesomeIcon
              onMouseEnter={() => toggle()}
              onMouseLeave={() => toggle()}
              icon={faCode}
              size="10x"
              className="w-50 h-25 logoColor"
              spin={isSpinning}
            />
          </Col>
          <Titular
            title="Creación de WebSites"
            subTitle="Impulsando la transformación digital de nuestros clientes con las nuevas tecnologías"
          />
        </Row>
      </Container>

      <Container className="mt-5 solutionsSection">
        <Row>
          <SmallTitle
            title="Como trabajamos"
            subTitle="Somos flexibles y nos adaptamos a las necesidades de nuestros clientes."
          />
          <ServiceCard
            enter={() => {}}
            out={() => {}}
            icon={faUserTie}
            title="Recursos asignados"
            subTitle="Rellene la brecha de habilidades de sus recursos internos con los mejores 
            talentos UltraWeb asignados a sus proyectos a tiempo completo y administrados por 
            usted directamente."
          />
          <ServiceCard
            enter={() => {}}
            out={() => {}}
            icon={faChalkboard}
            title="Célula Ágil"
            subTitle="Le proporcionamos un equipo de desarrollo dedicado, liderado por un 
            Administrador de Proyectos de nuestra parte que le informa periódicamente y le 
            consulta sobre todas las decisiones importantes del proyecto."
          />
          <ServiceCard
            enter={() => {}}
            out={() => {}}
            icon={faClipboardCheck}
            title="Proceso completo"
            subTitle="Concéntrese en sus actividades comerciales principales mientras configuramos 
            todo el proceso de desarrollo y asumimos toda la responsabilidad del proyecto y todos 
            los riesgos relacionados."
          />
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="justify-content-center">
          <SmallTitle
            title="Competencias tecnológicas"
            subTitle="Tenemos una amplia gama de competencias tecnológicas"
          />
          <Competencias icon={<FaHtml5 size="4em" color="#F16529" />} />
          <Competencias icon={<FaCss3 size="4em" color="#2565AE" />} />
          <Competencias icon={<FaJs size="4em" color="#F0DB4F" />} />
          <Competencias icon={<FaNode size="4em" color="#80BC10" />} />
          <Competencias icon={<FaJenkins size="4em" color="#D33834" />} />
          <Competencias icon={<FaWordpressSimple size="4em" />} />
          <Competencias icon={<FaDocker size="4em" color="#02A5E6" />} />
        </Row>
      </Container>

      <section style={{ backgroundColor: "#b4e7ff" }} className="py-5">
        <SmallTitle
          title="Aún hay más..."
          subTitle="Soluciones a la medida para cada tipo de proceso empresarial"
        />
        <Container className="text-md-left text-center py-5">
          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Foptimizar.svg?alt=media&token=9c8641bc-04f9-4eec-a229-c1c2f3e4a5b2"
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>¿Quiere optimizar el proceso comercial interno?</strong>
              </h2>
              <p>
                Diseñamos y creamos aplicaciones que optimizan o transforman con
                elegancia sus procesos comerciales internos al optimizar las
                operaciones, mejorar su transparencia, impulsar la eficiencia de
                los empleados, mejorar la colaboración entre departamentos y
                mejorar la presentación de informes y la planificación.
              </p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col className="col-md-6 col-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fmejorar.svg?alt=media&token=aec1e396-fd9e-49d0-92eb-f07c9f37be68"
              />
            </Col>
            <Col className="col-md-6 col-12 my-auto py-3">
              <h2>
                <strong>
                  ¿Quiere mejorar las interacciones con los clientes?
                </strong>
              </h2>
              <p>
                Podemos crear aplicaciones orientadas al cliente que faciliten
                la experiencia con su marca, impulsen el conocimiento de la
                marca, impresionen y retengan a sus clientes, permitiendo que su
                negocio se destaque y aumente su participación en el mercado.
                Para satisfacer las demandas de los usuarios modernos, prestamos
                especial atención al diseño llamativo, la facilidad de uso y el
                alto rendimiento en la aplicación que creamos.
              </p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Soluciones%2Fagilizar.svg?alt=media&token=990c56e7-9034-41ee-9ac5-892f32cc0d83"
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>
                  ¿Quiere agilizar la colaboración con socios comerciales?
                </strong>
              </h2>
              <p>
                Podemos crear aplicaciones potentes, ricas en características y
                resistentes a fallas que garanticen un entorno B2B conveniente
                para el intercambio de servicios, productos y datos entre
                empresas. Nuestro equipo se ocupa de los detalles de las
                aplicaciones B2B, tales como un grupo extenso de stakeholders
                del proyecto, procesos comerciales de larga duración,
                negociaciones intensivas, modelos de ventas únicos, la inclusión
                de servicios adicionales y seguimientos en la funcionalidad de
                la aplicación, varias opciones de pago.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Footer />
    </>
  );
};
