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
        <PathwayIntroduction image={image} description={"Lorem Ipsum"}/>
        {/* add in pathway component here */}
        <DropDown topicTitle={"Financial Forest"} lessonArr={lessonArr}/>
        </div>
        <div className='course-overview__side'>
        <MoreOptions title="Financal Forest" description="Lorem ipsum" handleDelete={handleDelete} handleEdit={handleEdit}/>
        <SalaryInfo salariesObj={salariesObj}/>
        <PotentialCareers potentialCareers={PotentialCareers}/>
        </div>
    </>
  )
}

export default CourseOverview