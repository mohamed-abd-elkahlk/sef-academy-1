import { useDispatch, useSelector } from "react-redux";
import Articles from "../components/simple/articles/Articles";
// import ArticlesWithimg from "../components/simple/articles/ArticlesWithimg";
import { fetchArticles } from "../store/features/articalsSlice";

const Home = () => {
  const dispatch = useDispatch();
  const articals = useSelector((state) => state.articles);
  return (
    <div>
      <h1 className="text-text-uppercase">software engineering for futer</h1>
      <button
        onClick={() => {
          dispatch(fetchArticles());
        }}
      >
        fetch
      </button>
      <br />
      <Articles />
      {/* <ArticlesWithimg /> */}
    </div>
  );
};

export default Home;
