import "./PathwayIntroduction.scss";
import React from "react";

const PathwayIntroduction = (props) => {
  const { image, description } = props;
  return (
    <div className="pathway-introduction">
      <img
        className="pathway-introduction__image"
        src={image}
        alt="pathway thumbnail"
      />
      <h2 className="pathway-introduction__title">Pathway Overview</h2>
      <p className="pathway-introduction__description">{description}</p>
    </div>
  );
};

export default PathwayIntroduction;
