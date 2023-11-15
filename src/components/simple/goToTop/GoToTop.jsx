import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const GoToTop = ({ color }) => {
  return (
    <Button variant="outline-dark" style={{ borderRadius: "100%" }}>
      <FontAwesomeIcon icon={faArrowUp} />
    </Button>
  );
};

export default GoToTop;
