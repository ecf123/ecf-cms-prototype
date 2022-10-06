import "./PotentialCareers.scss";

import React from 'react'

const PotentialCareers = ({PotentialCareer1, PotentialCareer2, PotentialCareer3, PotentialCareer4}) => {
  return (
    <div className="career">
        <h5 className="career__heading">Potential Careers</h5>
        <ul className="career__List">
            <li className="career__List--item">P1{PotentialCareer1}</li>
            <li className="career__List--item">P2{PotentialCareer2}</li>
            <li className="career__List--item">P3{PotentialCareer3}</li>
            <li className="career__List--item">P4{PotentialCareer4}</li>
        </ul>
    </div>
  )
}

export default PotentialCareers