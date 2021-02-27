import { React } from "react";
import {
  ServiceCardTeam,
  ServiceCardNosotros,
} from "./BackgroundComponents/ServiceCard";
import { Footer } from './Footer'
import { Container, Row, Col } from "reactstrap";
import { FaUsers } from "react-icons/fa";

import { Titular, SmallTitle } from "./BackgroundComponents/Titular";

export const Nosotros = () => {
  return (
    <>
      <Container>
        <Row className="homeSection justify-content-center">
          <Titular
            title="Sobre nosotros"
            subTitle="Experiencia, rigos y un enfoque centrado en el usuario."
          />
          <Col className="my-auto col-md-6 col-12">
            <FaUsers size="20em" color="#034ea2" />
          </Col>
        </Row>
      </Container>

      <Container className="mb-3">
        <Row>
          <SmallTitle subTitle="Quienes somos" />
          <p className="h5 pb-5">
            Somos una empresa de servicios de desarrollo de software y
            tecnología de la información tecnología móvil. Nuestros empleados
            nos hacen destacar. Ya sea usted un experto superior que necesita
            conocimientos profesionales o un equipo con diferentes habilidades
            técnicas y experiencia en el dominio, Ultraweb cuenta con
            profesionales capacitados en este campo. Proporcionamos un marco
            para el modelo de entrega global de soluciones de TI que supera las
            expectativas del cliente en términos de cantidad, tiempo y costo.
          </p>
        </Row>
      </Container>

      <section
        className="py-4"
        style={{ backgroundColor: "rgb(231, 231, 231)" }}
      >
        <Container className="py-5">
          <Row>
            <SmallTitle subTitle="Nuestros valores" />
            <ServiceCardNosotros
              title="Responsabilidad"
              clase="p-5 nosotros"
              icono={
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fresponsabilidad.svg?alt=media&token=4eb2d4cb-dfbd-4fdc-90de-5f1aae79ee32"
                />
              }
            />
            <ServiceCardNosotros
              title="Calidad"
              clase="p-5 nosotros"
              icono={
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fcalidad.svg?alt=media&token=df9529ff-e1ba-4089-87e6-154a5fdd0f30"
                />
              }
            />
            <ServiceCardNosotros
              title="Compromiso"
              clase="p-5 nosotros"
              icono={
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fcompromiso.svg?alt=media&token=e99523a3-756d-4e72-9943-79ce0c8ee514"
                />
              }
            />
            <ServiceCardNosotros
              title="Innovación"
              clase="p-5 nosotros"
              icono={
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Finnovacion.svg?alt=media&token=4ab7eb43-a7dc-48f9-a0d3-4bf635d6f4df"
                />
              }
            />
            <ServiceCardNosotros
              title="Colaboración"
              clase="p-5 nosotros"
              icono={
                <img
                  alt=""
                  src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fcolaboracion.svg?alt=media&token=ca3abd42-460c-4070-8239-259672b7e557"
                />
              }
            />
          </Row>
        </Container>
      </section>

      <section
        style={{ backgroundColor: "#021b4e" }}
        className="py-5 text-white"
      >
        <SmallTitle subTitle="Nuestra filosofia de negocios" />
        <Container className="text-md-left text-center py-5">
          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Ffilosofia%201.svg?alt=media&token=8904b391-ce3b-467d-ac72-8a2ce2ba6170"
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>Comprender las necesidades del cliente</strong>
              </h2>
              <p>
                Estudiamos cuidadosamente el caso de cada cliente para
                comprender sus necesidades y objetivos, y brindar soluciones
                confiables y efectivas. Analizaremos todas las opciones
                disponibles y brindaremos recomendaciones efectivas para guiar a
                los clientes a tomar decisiones comerciales acertadas.
              </p>
            </Col>
          </Row>

          <Row className="py-4">
            <Col className="col-md-6 col-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Ffilosofia%202.svg?alt=media&token=123f5042-6610-4f3f-b283-2fb897c2cbf0"
              />
            </Col>
            <Col className="col-md-6 col-12 my-auto py-3">
              <h2>
                <strong>Entregamos en máximo valor</strong>
              </h2>
              <p>
                Siempre dar un servicio de calidad y excelencia es una de
                nuestras prioridades. Nuestra empresa se esfuerza día a día en
                brindar lo mejor de nuestra existencia para así, de grata
                manera, poder satisfacer las necesidades de nuestros clientes de
                manera efectiva.
              </p>
            </Col>
          </Row>

          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Ffilosofia%203.svg?alt=media&token=8eb70057-9cbe-4e25-8661-959965445618"
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>Nuestros clientes, nuestros socios</strong>
              </h2>
              <p>
                Trabajamos más duro para convertirnos en un socio confiable a
                largo plazo de nuestros clientes. Nuestra principal prioridad no
                es solo brindar servicios y soluciones profesionales, sino
                también convertirnos en un verdadero socio tecnológico,
                comprometido con satisfacer las necesidades de los clientes de
                hoy y respaldar las crecientes necesidades comerciales de los
                clientes del mañana.
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row className="py-5">
          <SmallTitle subTitle="Conozca a nuestro equipo" />
          <ServiceCardTeam
            title="Pedro Luis De Leon"
            subTitle="Ingeniero de Desarrollo"
            clase="pedro"
            icono={
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fej2.svg?alt=media&token=a6293a10-0779-464e-91e1-8b65a1234131"
              />
            }
          />
          <ServiceCardTeam
            title="Roberto Tavarez"
            subTitle="Diseñador de UX/UI"
            clase="lobelto"
            icono={
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fej1.svg?alt=media&token=69f77553-c5b6-4583-a039-a3b0bc4b96e8"
              />
            }
          />
          <ServiceCardTeam
            title="Daniel Maquez"
            subTitle="Gerente General"
            clase="daniel"
            icono={
              <img
                alt=""
                src="https://firebasestorage.googleapis.com/v0/b/ultraweb2-b7141.appspot.com/o/Nosotros%2Fej3.svg?alt=media&token=fff9baac-cb0c-4ad6-9f16-9a730af36506"
              />
            }
          />
        </Row>
      </Container>

      <Footer  footerProps="container-fluid footerSection py-2"/>
    </>
  );
};
