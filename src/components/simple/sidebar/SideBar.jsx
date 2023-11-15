import { Col, Row } from "react-bootstrap";
import { ListComponent } from "./ListComponent";
import ButtonCreation from "../button/ButtonCreation";

const Sidebar = ({ categories }) => {
  const data = [
    {
      category: "Users",
      subcategories: ["Admins", "Editors", "Instructors", "Students"],
    },
    {
      category: "Articles",
      subcategories: [
        "Published Articles",
        "Scheduled Articles",
        "Saved Drafts",
      ],
    },
    {
      category: "Jobs",
      subcategories: ["Published Jobs", "Saved Drafts"],
    },
    {
      category: "Courses",
      subcategories: ["Published Courses", "Scheduled Courses", "Saved Drafts"],
    },
  ];

  return (
    <Row>
      <Col md={3} className="sidebar py-3">
        <div>
          {data.map((category, index) => (
            <ListComponent
              key={index}
              category={category.category}
              subcategories={category.subcategories}
            />
          ))}
        </div>
        <div className="p-3">
          <ButtonCreation title="upload certifactes" w="100%" />
        </div>
      </Col>
    </Row>
  );
};

export default Sidebar;
