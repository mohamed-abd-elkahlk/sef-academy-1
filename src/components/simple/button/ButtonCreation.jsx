import { Button } from "react-bootstrap";

const ButtonCreation = (props) => {
  return (
    <Button
      className={`btn-gold rounded-sm text-white p-3 border-0  ${
        props.w && "full-width"
      }`}
    >
      {props.title}
    </Button>
  );
};

export default ButtonCreation;
