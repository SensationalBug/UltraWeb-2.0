import { React } from "react";
import { Col, Card, CardBody, CardText, CardTitle } from "reactstrap";

export const ServiceCardNosotros = (props) => {
  console.log(props)
  return (
    <Col className="col-12 col-md-4 mt-5 mx-auto">
      <Card
        className={props.clase}
      >
        <CardBody>{props.icono}</CardBody>
        <CardTitle tag="h5" style={{ color: "#034ea2" }}><strong>{props.title}</strong></CardTitle>
        <CardBody>
          <CardText>{props.subTitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};