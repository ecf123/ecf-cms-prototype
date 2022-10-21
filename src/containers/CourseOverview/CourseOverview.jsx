import "./CourseOverview.scss";
import DropDown from "../../components/DropDown/DropDown";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import PathwayIntroduction from "../../components/PathwayIntroduction/PathwayIntroduction";
import PotentialCareers from "../../components/PotentialCareers/PotentialCareers";
import SalaryInfo from "../../components/SalaryInfo/SalaryInfo";
import PathwayOverviewHeader from "../../components/PathwayOverviewHeader/PathwayOverviewHeader";
import handleDelete from "../../components/MoreOptions/MoreOptions";
import handleEdit from "../../components/MoreOptions/MoreOptions";

const CourseOverview = ({image, description, link, topicTitle, topicArr, lessonArr, title}) => {
  return (
    <section className="course-overview">
      <div className="course-overview__main">
        <PathwayIntroduction image={image} description={description} />
        <PathwayOverviewHeader link={link} />
        <div className="course-overview__main--drop">
        {topicArr.map((topic) => {
          return (
            <>
             <DropDown topicTitle={topicTitle} lessonArr={lessonArr} />
            </>
          )
        } )}
         
        </div>
      </div>
      <div className="course-overview__side">
        <MoreOptions
          title={title}
          description={description}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <SalaryInfo salariesObj={salariesObj} />
        <PotentialCareers potentialCareers={potentialCareers} />
      </div>
    </section>
  );
};

export default CourseOverview;
