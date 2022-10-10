import "./Overview.scss";

import React from 'react'

const Overview = ({header, text}) => {


  return (
    <div className="overview">
        <h2 className="overview__header">{header} Overview</h2>
        <p className="overview__text">{text}</p>
    </div>

  )
}

export default Overview
