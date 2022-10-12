import './ViewOptions.scss';
import { useState } from 'react';

const ViewOptions = ({text}) => {
  const [selected, setSelected] = useState(text);

  const getCurrentPage = (text) => {
    setSelected(text);
  };

  let classes = "view-options__option";
  
  const handleClick = (text) => {
    getCurrentPage(text);
  };

  if (selected == text) {
      classes += "--clicked";
    }

 
  return (
    <div className='view-options'>
        <h3 text="Overview" onClick={handleClick} className={classes}>Overview</h3>
        <h3 text="Courses"onClick={handleClick} className={classes}>Courses</h3>
        <h3 text="Stats" onClick={handleClick} className={classes}>Stats</h3>
    </div>
  )
}

export default ViewOptions;
