import React from "react";
import { ReactComponent as BinIcon }from "../../assets/bin-icon.svg";
import { ReactComponent as PenIcon }from "../../assets/pen-icon.svg";
import './MoreOptions.scss';
const MoreOption = (props) => {
    const {item,description} = props;
  return (
    <div className="more-options">
      <h3>{item} Options</h3>
      <p>{description}</p>
      <div className="more-options__buttons">
        <button className="more-options__button"><PenIcon></PenIcon>Edit</button>
        <button className="more-options__button"><BinIcon></BinIcon>Delete</button>
      </div>
    </div>
  );
};

export default MoreOption;
