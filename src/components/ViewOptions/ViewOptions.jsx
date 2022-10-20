import "./ViewOptions.scss";
import { useState } from "react";
import { Link } from "react-router-dom";

const ViewOptions = ({ selectedOption }) => {
  const [selected, setSelected] = useState(selectedOption); 
 const selectionChange = (option)=> {
  setSelected(option)
 }

  return (
    <div className="view-options">
      <Link to ="*" onClick={() => selectionChange("Overview")} className={!selected?"view-options__overview":"view-options__overview--clicked"} >
        Overview
      </Link>
      <Link to ="*" onClick={() => selectionChange("Courses")} className={!selected?"view-options__courses":"view-options__courses--clicked"} >
        Courses
      </Link>
      <Link to ="*" onClick={() => selectionChange("Stats")} className={!selected?"view-options__stats":"view-options__stats--clicked"} >
        Stats
      </Link>
    </div>
  );
};

export default ViewOptions;
