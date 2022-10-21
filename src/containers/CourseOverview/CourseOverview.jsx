import React from 'react'
import DropDown from '../../components/DropDown/DropDown'
import MoreOptions from '../../components/MoreOptions/MoreOptions'
import PathwayIntroduction from '../../components/PathwayIntroduction/PathwayIntroduction'
import PotentialCareers from '../../components/PotentialCareers/PotentialCareers'
import SalaryInfo from '../../components/SalaryInfo/SalaryInfo'
import PathwayOverviewHeader from '../../components/PathwayOverviewHeader/PathwayOverviewHeader'
import handleDelete from '../../components/MoreOptions/MoreOptions'
import handleEdit from "../../components/MoreOptions/MoreOptions"
import './CourseOverview.scss'

const CourseOverview = () => {
  return (
    <section className='course-overview'>
        <div className="course-overview__main">
        <PathwayIntroduction className="pi" image={"image"} description={"Lorem Ipsum"}/>
        <PathwayOverviewHeader className="course-overview__main--poh"link={"link"}/>
        <DropDown className="course-overview__main--dd"topicTitle={"Financial Forest"} lessonArr={["english", "maths", "physics"]}/>
        </div>
        <div className='course-overview__side'>
        <MoreOptions className='course-overview__side--mo'title="Financal Forest" description="Lorem ipsum" handleDelete={handleDelete} handleEdit={handleEdit}/>
        <SalaryInfo className='course-overview__side--si'salariesObj={[1, 2, 3]}/>
        <PotentialCareers className='course-overview__side--pc'potentialCareers={["doctor", "nurse", "developer"]}/>
        </div>
    </section>
  )
}

export default CourseOverview