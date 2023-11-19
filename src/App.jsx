import { Container } from "react-bootstrap";
import "./App.css";
import ArticlesCardCommon from "./components/complex/ArticlesCardCommon/ArticlesCardCommon";
import JobCard from "./components/complex/JobCard/JobCard";
import JobDescription from "./components/complex/JobDescription/JobDescription";
import JobMainInfo from "./components/complex/JobMainInfo/JobMainInfo";
import "bootstrap/dist/css/bootstrap.min.css";
import JobForm from "./components/complex/JobForm/JobForm";
import CertificateForm from "./components/complex/CertificateForm/CertificateForm";
import ArticlesForm from "./components/complex/ArticlesForm/ArticlesForm";
import UserForm from "./components/complex/UserForm/UserForm";
import CoursesForm from "./components/complex/CoursesForm/CoursesForm";
function App() {
  const desc =
    "Nile Creations is a creative digital marketing communications agency works above, below and through the line. We are ...More";
  const jobDesc =
    "This position is for our partner: https://leap13.com which is specialized in developing WordPress themes and plugins (We don't design websites, we build WordPress themes & plugins). You're most welcome to check our main products for a better understanding of what we do.  Premium Addons for Elementor: https://premiumaddons.com Premium Blocks for Gutenberg: https://premiumblocks.io Kemet FSE WordPress Theme: https://kemet.io Wiz Smart WordPress Theme: https://wpwiz.io/ You will be responsible for:  Designing creative and professional websites' layouts.";
  const req =
    "Creativity is a Must! Please include your work samples and/or online portfolio. Your portfolio must include high-quality web design work samples. We are not interested in branding work samples or any other irrelevant work.";
  const someTitle = "Here's the first article";
  const someContent =
    "lorem ipsum here is some gibberish to clarify the difference between the title and those of description in those ways font size and if normal or italic, i wrote some gibberish but i don't how many word did i wrote here ";
  return (
    <Container>
      <CoursesForm />
    </Container>
  );
}

export default App;
