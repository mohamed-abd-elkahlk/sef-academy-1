import { Badge } from "react-bootstrap";

const PanelType = (props) => {
  return (
    <div>
      <p>{props.type}</p>
      <div className="home-line"></div>
      <Badge bg="transparent" text="muted" className="px-0">
        {props.date}
      </Badge>
    </div>
  );
};

export default PanelType;
