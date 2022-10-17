import React from 'react'
import DropDown from '../../components/DropDown/DropDown'
import MoreOptions from '../../components/MoreOptions/MoreOptions'
import PathwayIntroduction from '../../components/PathwayIntroduction/PathwayIntroduction'
import PotentialCareers from '../../components/PotentialCareers/PotentialCareers'
import SalaryInfo from '../../components/SalaryInfo/SalaryInfo'

const CourseOverview = () => {
  return (
    <>
        <div className="course-overview__main">
        <PathwayIntroduction/>
        <DropDown />
        </div>
        <div className='course-overview__side'>
        <MoreOptions />
        <SalaryInfo />
        <PotentialCareers />
        </div>
    </>
  )
}

export default CourseOverview