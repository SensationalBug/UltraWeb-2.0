import { React } from "react";
import { Col } from "reactstrap";

export const Titular = (props) => {
  return (
    <Col className="my-auto col-md-6 col-10">
      <p className="h2 text-sm-center text-md-left text-uppercase">
        {props.title}
      </p>
      <p className="text-sm-center text-md-left">
        {props.subTitle}
      </p>
    </Col>
  );
};

export const SmallTitle = (props) => {
  return (
    <Col className="col-12 py-3">
      <small className="h5 text-uppercase text-muted">{props.title}</small>
      <p className="h2">{props.subTitle}</p>
    </Col>
  );
};
