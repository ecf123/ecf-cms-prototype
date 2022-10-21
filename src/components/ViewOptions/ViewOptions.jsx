<<<<<<< HEAD
import './ViewOptions.scss';

const ViewOptions = () => {
  return (
    <div className='view-options'>
        <h3 className='view-options__option'>Overview</h3>
        <h3 className='view-options__option'>Courses</h3>
        <h3 className='view-options__option'>Stats</h3>
    </div>
  )
}
=======
import "./ViewOptions.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ViewOptions = ({ selectedOption }) => {
  const [selected, setSelected] = useState(selectedOption);

  const selectionChange = (option) => setSelected(option);

  const setClassName = (option) =>
    selected != option
      ? "view-options__overview"
      : "view-options__overview--clicked";

  return (
    <div className="view-options">
      <Link
        to="*"
        onClick={() => selectionChange("Overview")}
        className={setClassName("Overview")}
      >
        Overview
      </Link>
      <Link
        to="*"
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
>>>>>>> 580e22dc312720150b4b754fd0198098134aa5a4

export default ViewOptions;
