import { React } from "react";
import { Button } from 'reactstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const ServiceButton = (props) => {
  return (
    <Button
      id="boton"
      onClick={() => {props.click()}}
      className="col-3 col-md-10 mx-1 mx-md-0 my-2 pl-3 py-3 py-md-5"
    >
      <FontAwesomeIcon icon={props.icon} />
      <span className="h5 mx-2 serviceButton">{props.title}</span>
    </Button>
  );
};
