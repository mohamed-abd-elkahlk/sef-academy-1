import { Card, ListGroup } from "react-bootstrap";

export const ListComponent = ({ category, subcategories }) => {
  return (
    <Card className="mb-3 p-3 border-0 sidebar">
      <Card.Header className="border-0 rounded-1 bg-dark">
        {category}
      </Card.Header>
      <ListGroup variant="flush">
        {subcategories.map((subcategory, index) => (
          <ListGroup.Item key={index} className="border-0 sidebar">
            {subcategory}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </Card>
  );
};
