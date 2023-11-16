import { Card } from "react-bootstrap";
import CategoryItem from "../categoryItem/CategoryItem";
import TimeAgo from "../timeAgo/TimeAgo";

const ArticlesCard = (props) => {
  return (
    <Card border="0" text={props.color || "dark"}>
      <Card.Body>
        <CategoryItem cat={props.category} />
        <Card.Header className="d-flex justify-content-between align-items-center bg-transparent px-0 border-0">
          <Card.Title as="h2">{props.title}</Card.Title>
          <TimeAgo timeAgo={props.publishedAt} color={props.color || "muted"} />
        </Card.Header>
        <Card.Text>{props.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticlesCard;
