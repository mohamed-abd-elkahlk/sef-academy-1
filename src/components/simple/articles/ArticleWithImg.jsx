import { Card } from "react-bootstrap";
import ArticlesCard from "./ArticlesCard";

const ArticleWithImg = ({ article, color, img }) => {
  return (
    <div className="d-flex justify-content-between align-items-center">
      <Card.Img
        variant="left"
        className="img-fluid cover-image"
        width={100}
        height={100}
        src="https://plus.unsplash.com/premium_photo-1663858367001-89e5c92d1e0e?q=80&w=2815&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <ArticlesCard article={article} color={color} img={img} />
    </div>
  );
};

export default ArticleWithImg;
