import MoreOptions from "../../components/MoreOptions/MoreOptions"
import Overview from "../../components/Overview/Overview"
import PageTitle from "../../components/PageTitle/PageTitle"
import PathwayHeader from "../../components/PathwayHeader/PathwayHeader"
import Button from "../../components/Button/Button"
import barclaysIcon from "../../assets/barclays-icon-white-background.svg"
import {ReactComponent as Plus} from "../../assets/circular-plus-icon.svg";
import "./CourseContainer.scss"
import LessonLink from "../../components/LessonLink/LessonLink"

const CourseContainer = ({data}) => {

  const {name, title, image, description, categories, provider, lessons} = data

  const lessonsJSX = lessons?.map(({duration, title}, index) => (
    <>
      <LessonLink courseDuration={duration} courseTitle={title} key={index} />
      <div className="course-container__line" />
    </>
  ))

  let companyIcon = "";
  switch (provider) {
    case "barclays":
      companyIcon = barclaysIcon
      break;
  
    default:
      break;
  }

  return (
    <div className="course-container">
      <div className="course-container__header">
        <PageTitle title={name} className="page-title course-container__title"/>
      </div>
      <div className="course-container__body">
        <div className="course-container__body--left">
          <PathwayHeader headingTitle={title} headingImage={image} imageAltText={title} links={categories} companyIcon={companyIcon} />
          <div className="course-container__line" />
          <Overview header="Course Overview" text={description}/>
          <div className="course-container__curriculum">
            <div className="course-container__curriculum--header">
              <h2 className="course-container__curriculum--title">Course Curriculum</h2>
              <Button style={"button black round-border medium"} imgStyle={"large-img"} textStyle={"text large-text black"} buttonText={"Add Lesson"}><Plus /></Button>
            </div>
            {lessonsJSX}
          </div>
        </div>
        <div className="course-container__body--right">
          <MoreOptions title="Course " description="Edit this course or delete it" />
        </div>
      </div>

    </div>
  )
}

export default CourseContainer