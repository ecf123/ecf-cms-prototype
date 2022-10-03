import React from "react";
import { ReactComponent as BinIcon }from "../../assets/bin-icon.svg";
import { ReactComponent as PenIcon }from "../../assets/pen-icon.svg";
import './MoreOptions.scss';
const MoreOption = (props) => {
    const {item,description} = props;
  return (
    <div className="more-options">
      <h3 className="more-options__title">{item} Options</h3>
      <p className="more-options__description">{description}</p>
      <div className="more-options__buttons">
        <button className="more-options__button"><PenIcon></PenIcon>Edit</button>
        <button className="more-options__button more-options__button--delete"><BinIcon></BinIcon>Delete</button>
      </div>
    </div>
  );
};

export default MoreOption;
