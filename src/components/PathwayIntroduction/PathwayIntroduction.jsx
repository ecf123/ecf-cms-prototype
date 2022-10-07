import "./PathwayIntroduction.scss"
import React from 'react'

const PathwayIntroduction = (props) => {
  const {img, description} = props;
  return (
    <div className="pathway-introduction">
      <img className="pathway-introduction__img" src={img} alt="Pathway-thumbnail" />
      <h2 className="pathway-introduction__title">Pathway Overview</h2>
      <p className="pathway-introduction__description">{description}</p>
      </div>
  )
}

export default PathwayIntroduction