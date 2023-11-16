import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchJobs } from "./store/features/jopSlice";
import { fetchArticles } from "./store/features/articalsSlice";
import { fetchCourses } from "./store/features/courseSlice";
import { fetchExams } from "./store/features/examsSlice";
import { fetchUsers } from "./store/features/userSlice";
const App = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchUsers());
        }}
      >
        fetch
      </button>
    </div>
  );
};

export default App;
