import { React } from "react";

import { Titular, SmallTitle } from "../BackgroundComponents/Titular";
import { ServiceCard } from "../BackgroundComponents/ServiceCard";

import { Container, Row, Col } from "reactstrap";

export const ServiceComponent = (props) => {
  const { serviceProps } = props;
  return (
    <>
      <Container>
        <Row className="homeSection  justify-content-center">
          <Col className="my-auto toggleLogo">{serviceProps.mainIcon}</Col>
          <Titular
            title={serviceProps.mainTitle}
            subTitle={serviceProps.mainSubTitle}
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
            icono={serviceProps.firstCardIcon}
            title={serviceProps.firstCardTitle}
            subTitle={serviceProps.firstCardSubTitle}
          />
          <ServiceCard
            enter={() => {}}
            out={() => {}}
            icono={serviceProps.secondCardIcon}
            title={serviceProps.secondCardTitle}
            subTitle={serviceProps.secondCardSubTitle}
          />
          <ServiceCard
            enter={() => {}}
            out={() => {}}
            icono={serviceProps.thirdCardIcon}
            title={serviceProps.thirdCardTitle}
            subTitle={serviceProps.thirdCardSubTitle}
          />
        </Row>
      </Container>

      <Container className="my-5">
        <Row className="justify-content-center">
          <SmallTitle
            title="Competencias tecnológicas"
            subTitle="Tenemos una amplia gama de competencias tecnológicas"
          />
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon1}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon2}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon3}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon4}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon5}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon6}</Col>
          <Col className="col-md-1 col-3 my-md-0 my-4 mx-md-auto">{serviceProps.competenciaIcon7}</Col>
        </Row>
      </Container>

      <section style={{ backgroundColor: "#33b4f0" }} className="py-5">
        <SmallTitle
          title={serviceProps.lastTitle}
          subTitle={serviceProps.lastSubTitle}
        />
        <Container className="text-md-left text-center py-5">
          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src={serviceProps.firstImgSrc}
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>{serviceProps.firstImgTitle}</strong>
              </h2>
              <p>{serviceProps.firstImgSubTitle}</p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col className="col-md-6 col-12">
              <img
                className="serviceImagen"
                alt=""
                src={serviceProps.secondImgSrc}
              />
            </Col>
            <Col className="col-md-6 col-12 my-auto py-3">
              <h2>
                <strong>{serviceProps.secondImgTitle}</strong>
              </h2>
              <p>{serviceProps.secondImgSubTitle}</p>
            </Col>
          </Row>
          <Row className="py-4">
            <Col className="col-md-6 col-12 order-md-12">
              <img
                className="serviceImagen"
                alt=""
                src={serviceProps.thirdImgSrc}
              />
            </Col>
            <Col className="col-md-6 col-12 order-md-1 my-auto py-3">
              <h2>
                <strong>{serviceProps.thirdImgTitle}</strong>
              </h2>
              <p>{serviceProps.thirdImgSubTitle}</p>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
