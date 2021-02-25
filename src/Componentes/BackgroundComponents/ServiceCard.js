import { React } from "react";
import { Col, Card, CardBody, CardText, CardTitle } from "reactstrap";

export const ServiceCard = (props) => {
  console.log(props)
  return (
    <Col className="col-12 col-md-4 mt-5">
      <Card
        className="service"
      >
        <CardBody>{props.icono}</CardBody>
        <CardTitle tag="h5">{props.title}</CardTitle>
        <CardBody>
          <CardText>{props.subTitle}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};
