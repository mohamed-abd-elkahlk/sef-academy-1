import { faPenToSquare, faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Badge } from "react-bootstrap";
import ListGroup from "react-bootstrap/ListGroup";

const UserStatusCard = (props) => {
  return (
    <ListGroup>
      <ListGroup.Item className="bg-dark text-light border-0 d-flex justify-between align-items-center gap-5">
        <div>{props.name}</div>
        <div className="d-flex justify-between align-items-center flex-wrap gap-3">
          <Badge className=" user-status" text="light">
            {props.status}
          </Badge>
          <div className="">{props.userID}</div>
          <div className="">{props.role}</div>
          <div className="mr-3">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="mr-3 cursor-pointer"
            />
            <FontAwesomeIcon
              icon={faTrashCan}
              className="mr-3 cursor-pointer"
            />
          </div>
        </div>
      </ListGroup.Item>
    </ListGroup>
  );
};

export default UserStatusCard;
