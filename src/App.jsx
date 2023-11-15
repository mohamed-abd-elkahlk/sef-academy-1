import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { useEffect } from "react";
import { fetchJobs } from "./store/features/jopSlice";
const App = () => {
  const dispatch = useDispatch();
  const jobs = useSelector((state) => state.jobs);
  return (
    <div>
      <button
        onClick={() => {
          dispatch(fetchJobs());
        }}
      >
        fetch
      </button>
    </div>
  );
};

export default App;
