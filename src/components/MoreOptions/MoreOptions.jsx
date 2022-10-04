import React from "react";
import { ReactComponent as Bin }from "../../assets/bin-icon.svg";
import { ReactComponent as Edit }from "../../assets/notepad-and-pencil-grey.svg";
import './MoreOptions.scss';
import Button from '../Button/Button';
const MoreOptions = (props) => {
    const {item,description} = props;
  return (
    <div className="more-options">
      <h3 className="more-options__title">{item} Options</h3>
      <p className="more-options__description">{description}</p>
      <div className="more-options__buttons">
        < Button style={"button grey square-border small more-options__button"} imgStyle={"small-img black-svg"} textStyle={"text small-text grey"} buttonText={"Edit"}><Edit /></Button>
        < Button style={"button red square-border small more-options__button"} imgStyle={"small-img white-svg"} textStyle={"text small-text red"} buttonText={"Delete"}><Bin /></Button>
      </div>
    </div>
  );
};

export default MoreOptions;
