import MoreOptions from "../../components/MoreOptions/MoreOptions"
import Overview from "../../components/Overview/Overview"
import PageTitle from "../../components/PageTitle/PageTitle"
import PathwayHeader from "../../components/PathwayHeader/PathwayHeader"
import barclaysIcon from "../../assets/barclays-icon-white-background.svg"
import "./CourseContainer.scss"

const CourseContainer = ({data}) => {

  const {name, title, image, description, categories, provider} = data

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
        <PageTitle title={name} className="page-title"/>
      </div>
      <div className="course-container__body">
        <div className="course-container__body--left">
          <PathwayHeader headingTitle={title} headingImage={image} imageAltText={title} links={categories} companyIcon={companyIcon} />
          <Overview header="Course Overview" text={description}/>

        </div>
        <div className="course-container__body--right">
          <MoreOptions title="Course Options" description="Edit this course or delete it" />
        </div>
      </div>

    </div>
  )
}

export default CourseContainer