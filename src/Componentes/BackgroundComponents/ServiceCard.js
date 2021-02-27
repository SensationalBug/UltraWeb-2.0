import { React } from "react";
import { Col, Card, CardBody, CardText, CardTitle } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ServiceCard = (props) => {
  return (
    <Col className="col-12 col-md-4 mt-5 mx-auto">
      <Card className={props.clase}>
        <CardBody>{props.icono}</CardBody>
        <CardTitle tag="h5" style={{ color: "#034ea2" }}>
          <strong>{props.title}</strong>
        </CardTitle>
        <CardBody>
          <CardText>{props.subTitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export const ServiceCardHome = (props) => {
  return (
    <Col className="col-12 col-md-4 mt-5">
      <Card
        className="carta"
        onMouseEnter={() => props.enter()}
        onMouseLeave={() => props.out()}
      >
        <CardBody>
          <FontAwesomeIcon
            icon={props.icono}
            size="4x"
            className="logoColor"
            spin={props.spin}
          />
        </CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardBody>
          <CardText>{props.subTitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export const ServiceCardNosotros = (props) => {
  return (
    <Col className="col-10 col-md-4 mt-5 mx-auto">
      <Card className={props.clase}>
        <CardBody>{props.icono}</CardBody>
        <CardTitle tag="h5" style={{ color: "#034ea2" }}>
          <strong>{props.title}</strong>
        </CardTitle>
      </Card>
    </Col>
  );
};

export const ServiceCardTeam = (props) => {
  return (
    <Col className="col-10 col-md-4 mt-5 mx-auto">
      <Card className={props.clase}>
        <CardBody>{props.icono}</CardBody>
        <CardTitle tag="h5" style={{ color: "#034ea2" }}>
          <strong>{props.title}</strong>
        </CardTitle>
        <CardBody>
          <CardText>{props.subTitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
