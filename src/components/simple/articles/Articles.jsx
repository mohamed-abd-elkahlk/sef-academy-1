import { CardGroup, Col, Row } from "react-bootstrap";
import ArticlesCard from "./ArticlesCard";
import ArticleWithImg from "./ArticleWithImg";
import "bootstrap/dist/css/bootstrap.css";
const Articles = () => {
  const articles = [
    {
      title: "Here's the first article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      publishedAt: "2 hours ago",
      category: "Tech",
    },
    {
      title: "Here's the second article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      publishedAt: "3 hours ago",
      category: "Sport",
    },
    {
      title: "Here's the third article",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.",
      publishedAt: "5 hours ago",
      category: "Adventure",
    },
  ];

  return (
    <Row>
      <Col xs={12} md={6}>
        <ArticlesCard article={articles[0]} color={"dark"} img={true} />
        <ArticleWithImg article={articles[0]} color={"dark"} img={true} />
      </Col>
      <Col xs={12} md={6}>
        <CardGroup>
          <Col xs={12} md={12}>
            {articles.slice(1).map((article) => (
              <ArticlesCard
                key={article.title}
                article={article}
                color={"dark"}
              />
            ))}
          </Col>
        </CardGroup>
      </Col>
    </Row>
  );
};

export default Articles;
