import { Card } from "react-bootstrap";
import CategoryItem from "../categoryItem/CategoryItem";
import TimeAgo from "../timeAgo/TimeAgo";

const ArticlesCard = (props) => {
  return (
    <Card border="0" text={props.color || "dark"}>
      <Card.Body>
        <CategoryItem cat={props.article.category} />
        <Card.Header className="d-flex justify-content-between align-items-center bg-transparent px-0 border-0">
          <Card.Title as="h2">{props.article.title}</Card.Title>
          <TimeAgo
            timeAgo={props.article.publishedAt}
            color={props.color || "muted"}
          />
        </Card.Header>
        <Card.Text>{props.article.content}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ArticlesCard;
