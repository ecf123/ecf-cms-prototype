import "./ViewOptions.scss";
import { useState } from "react";

const ViewOptions = ({selectedOption}) => {
  const [selected, setSelected] = useState(selectedOption);

  let classesOverview = "view-options__option";
  let classesCourses = "view-options__option";
  let classesStats = "view-options__option";

  if (selected == "Overview") {
    classesOverview += "--clicked";
  }
  if (selected == "Courses") {
    classesCourses += "--clicked";
  }
  if (selected == "Stats") {
    classesStats += "--clicked";
  }

  return (
    <div className="view-options">
      <h3 onClick={() => setSelected("Overview")} className={classesOverview}>
        Overview
      </h3>
      <h3 onClick={() => setSelected("Courses")} className={classesCourses}>
        Courses
      </h3>
      <h3 onClick={() => setSelected("Stats")} className={classesStats}>
        Stats
      </h3>
    </div>
  );
};

export default ViewOptions;
