import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FormControl, InputGroup } from "react-bootstrap";

const SearchInJobsButton = () => {
  return (
    <InputGroup className="my-3" style={{ width: "100%" }}>
      {/* <div className="form-outline position-relative" style={{ width: "100%" }}> */}
      <FormControl
        placeholder="Search..."
        aria-label="Search"
        className="form-control ps-3 rounded-5 search-job"
        width={1000}
      />
      <FontAwesomeIcon icon={faMagnifyingGlass} className="search-icon" />
    </InputGroup>
  );
};

export default SearchInJobsButton;
