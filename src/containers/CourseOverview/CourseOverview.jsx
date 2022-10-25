import "./CourseOverview.scss";
import DropDown from "../../components/DropDown/DropDown";
import MoreOptions from "../../components/MoreOptions/MoreOptions";
import PathwayIntroduction from "../../components/PathwayIntroduction/PathwayIntroduction";
import PotentialCareers from "../../components/PotentialCareers/PotentialCareers";
import SalaryInfo from "../../components/SalaryInfo/SalaryInfo";
import PathwayOverviewHeader from "../../components/PathwayOverviewHeader/PathwayOverviewHeader";
import handleDelete from "../../components/MoreOptions/MoreOptions";
import handleEdit from "../../components/MoreOptions/MoreOptions";
import image from '../../assets/money-growing-on-tree.svg'

const CourseOverview = ({dataJSON}) => {
  return (
    <section className="course-overview">
      <div className="course-overview__main">
        <PathwayIntroduction image={image} description={"Lorem ipsum dolor sit amet. Ea nisi accusamus 33 Quis quidem ut quia obcaecati ex modi dolore 33 suscipit labore. Ut aliquid molestias aut voluptate incidunt nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla."} />
        <PathwayOverviewHeader link={"link"} />
        <div className="course-overview__main--drop">
        {dataJSON.map((topic) => {
          return (
            <>
             <DropDown topicTitle={topic.name} lessonArr={topic.lessons} />
            </>
          )
        } )}
        
        </div>
      </div>
      <div className="course-overview__side">
        <MoreOptions
          title={"Financial Forest"}
          description={"Nam assumenda quis et iste vero sit dolor dicta At iusto sunt suscipit nulla."}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
        <SalaryInfo salariesObj={{["Fund Manager"] : 100000, ["Financial Analyst"] : 60000, ["Stock Broker"] : 5000}} />
        <PotentialCareers potentialCareers={["Financial Analyst", "Accountant", "Investment Analyst", "Stock Broker"]} />
      </div>
    </section>
  );
};

export default CourseOverview;
