import { React, useState } from "react";
import { CardInformation } from "./CardInformation";
import { Col, Card, CardBody, CardText } from "reactstrap";

export const Cards = (props) => {
  const [collapseState, setCollapseState] = useState(false);

  const openCollapse = () => {
    setCollapseState(!collapseState);
  };

  return (
    <Col className="col-md-4 col-12 my-3">
      <Card
        onClick={() => openCollapse()}
        onMouseEnter={() => {
          props.in();
        }}
        onMouseLeave={() => {
          props.out();
        }}
        className="techCard border border-light"
      >
        <CardBody>
          {props.logo}
          <CardText
            style={{ opacity: props.opacity, transition: ".5s" }}
            className="h2"
          >
            {props.title}
          </CardText>
        </CardBody>
      </Card>
      <CardInformation isOpen={collapseState} content={props.content}/>
    </Col>
  );
};
