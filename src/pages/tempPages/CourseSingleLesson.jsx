import React from "react";
import { useParams } from "react-router-dom";

const CourseSingleLesson = () => {
  const { courseName, lessonTitle } = useParams();
  return (
    <div>
      CourseSingleLesson
      <br />
      {courseName}
      <br />
      {lessonTitle}
    </div>
  );
};

export default CourseSingleLesson;
