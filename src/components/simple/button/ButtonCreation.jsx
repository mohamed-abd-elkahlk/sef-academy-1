import { Button } from "react-bootstrap";

const ButtonCreation = (props) => {
  return (
    <Button
      className={`btn-gold rounded-1 text-white ms-1 ${
        props.w && "full-width"
      }`}
    >
      {props.title}
    </Button>
  );
};

export default ButtonCreation;
