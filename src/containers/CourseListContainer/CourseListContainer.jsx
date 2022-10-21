import "./CourseListContainer.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import PageTitle from "../../components/PageTitle/PageTitle";
import ViewOptions from "../../components/ViewOptions/ViewOptions";
import PathwayDisplay from "../../components/PathwayDisplay/PathwayDisplay";

const CourseListContainer = ({dataJSON}) => {

  const dataSource = dataJSON ? dataJSON.map((course) => {
    let durationArray = [];
    let courseDuration = 0;

    course.lessons.forEach((element) => {
      durationArray.push(...element.duration.split(" "));
    });

    course.challenges.forEach((element) => {
      durationArray.push(...element.duration.split(" "));
    });

    for (let i = 0; i < durationArray.length; i++) {
      if (durationArray[i] == "hrs") {
        courseDuration += Number(durationArray[i - 1]) * 60;
      } else if (durationArray[i] == "minutes") {
        courseDuration += Number(durationArray[i - 1]);
      }
    }
    return {
        key: course.id,
        id: course.id,
        course_name: course.name,
        course_provider: course.provider,
        no_of_lessons: course.lessons.length,
        no_of_assignments: course.challenges.length,
        course_length: courseDuration,
        students_enrolled: 0,
      };
  }) : dataJSON

  return (
    <div className="course-list">
      <div className="course-list__header">
          <PageTitle
            className="course-list__title page-title"
            title="Course List"
          />
          <ViewOptions selectedOption="Courses"/>
      </div>
      <div className="course-list__display-selector">
        <PathwayDisplay />
      </div>
      <div className="course-list__table">
        <ListComponentUniversal
          data={dataSource}
        />
      </div>
    </div>
    
  );
};

export default CourseListContainer;
