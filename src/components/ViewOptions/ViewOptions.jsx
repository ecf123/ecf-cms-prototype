import "./ViewOptions.scss";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const ViewOptions = ({ selectedOption }) => {
  const [selected, setSelected] = useState(selectedOption);
  const location = useLocation();
  const course = location.pathname.split("/").slice(0, 3).join("/");

  const selectionChange = (option) => setSelected(option);

  const setClassName = (option) =>
    selected != option
      ? "view-options__overview"
      : "view-options__overview--clicked";

  return (
    <div className="view-options">
      <Link
        to={course}
        onClick={() => selectionChange("Overview")}
        className={setClassName("Overview")}
      >
        Overview
      </Link>
      <Link
        to="courses/list"
        onClick={() => selectionChange("Courses")}
        className={setClassName("Courses")}
      >
        Courses
      </Link>
      <Link
        to="*"
        onClick={() => selectionChange("Stats")}
        className={setClassName("Stats")}
      >
        Stats
      </Link>
    </div>
  );
};

export default ViewOptions;
