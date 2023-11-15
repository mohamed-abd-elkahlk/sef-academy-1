import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const TimeAgo = ({ timeAgo, color }) => {
  return (
    <span className="span-icon-about">
      <FontAwesomeIcon icon={faClock} />
      <Badge bg="transparent" text={color}>
        {timeAgo}
      </Badge>
    </span>
  );
};

export default TimeAgo;
