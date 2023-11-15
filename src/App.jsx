import "./App.css";
import Articles from "./components/simple/articles/Articles";
import ButtonCreation from "./components/simple/button/ButtonCreation";
import CategoryItem from "./components/simple/categoryItem/CategoryItem";
import GoToTop from "./components/simple/goToTop/GoToTop";
import PanelType from "./components/simple/panelType/PanelType";
import ReadMore from "./components/simple/readMore/ReadMore";
import SearchInJobsButton from "./components/simple/searchInput/SearchInJobsButton";
import Sidebar from "./components/simple/sidebar/SideBar";
import TimeAgo from "./components/simple/timeAgo/TimeAgo";

const App = () => {
  return (
    <div>
      <CategoryItem cat={"TECH"} />
      <TimeAgo timeAgo={"2days"} color={"dark"} />
      <ReadMore color={"transparent"} />
      <GoToTop color={"dark"} />
      <Articles />
      <PanelType type="admin" date={"6th june 2023"} />
      <ButtonCreation title="create" />
      <ButtonCreation title="save" />
      <ButtonCreation title="login" />
      <SearchInJobsButton />
      <SearchInJobsButton />
      <SearchInJobsButton />
      <SearchInJobsButton />
      <Sidebar />
    </div>
  );
};

export default App;
