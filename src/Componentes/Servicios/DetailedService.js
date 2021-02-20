import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { React } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  ListGroup,
  ListGroupItem,
  Row,
  Col,
} from "reactstrap";

export const DetailedService = (props) => {
  return (
    <Card className="mb-3">
      <CardTitle>
        <img className="img-fluid" alt="..." src={props.imageSource} />
        <h3 className="serviceName text-white text-left ml-4">
          {props.tittle}
        </h3>
      </CardTitle>
      <CardBody className="text-left ml-3">
        <CardText>{props.paragraph1}</CardText>
        <CardText>{props.paragraph2}</CardText>
        {props.mainSpan}
        <Row>
          <Col className="col-md-6">
            <ListGroup className="lista">
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span1}</span>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span2}</span>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span3}</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col className="col-md-6">
            <ListGroup className="lista">
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span4}</span>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span5}</span>
              </ListGroupItem>
              <ListGroupItem>
                <FontAwesomeIcon icon={faCheck} className="logoColor"/>
                <span className="ml-1">{props.span6}</span>
              </ListGroupItem>
            </ListGroup>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};
