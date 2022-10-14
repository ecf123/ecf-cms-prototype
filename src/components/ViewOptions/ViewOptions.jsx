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

const ViewOptions = () => {
  const [selected, setSelected] = useState("Overview");

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
>>>>>>> 580e22dc312720150b4b754fd0198098134aa5a4

export default ViewOptions;
