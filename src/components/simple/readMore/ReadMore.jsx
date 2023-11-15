import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "react-bootstrap";

const ReadMore = ({ color }) => {
  return (
    <Button variant={color}>
      <FontAwesomeIcon icon={faGreaterThan} />
    </Button>
  );
};

export default ReadMore;
