import { React } from "react";
import { Collapse } from "reactstrap";

export const CardInformation = (props) => {
  const click = () => {
  }
  return (
    <Collapse className="text-center px-1 py-3" onClick={() => click()} isOpen={props.isOpen}>
        {props.content}
    </Collapse>
  );
};
