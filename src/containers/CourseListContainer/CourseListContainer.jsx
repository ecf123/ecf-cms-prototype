import "./CourseListContainer.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ViewOptions from "../../components/ViewOptions/ViewOptions";



const CourseListContainer = ({dataJSON}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState( dataJSON ? dataJSON.map((course) => {
    let durationArray = ["15", "minutes", "1", "hrs"];
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
        // missing name from database
        students_enrolled: 0,
      };
  }) : dataJSON
  )

  const onDelete = (e) => {
    Modal.confirm({
      title: "Are you sure, you want to delete this record?",
      okText: "Yes",
      okType: "danger",
      onOk: () => {
        setDataSource((pre) => {
          return pre.filter((row) => row.id !== e.id);
        });
      },
    });
  };

  const onEdit = (e) => {
    setIsEditing(true);
    setEditingEntry({ ...e });
  };
  const resetEditing = () => {
    setIsEditing(false);
    setEditingEntry(null);
  };

  return (
    <div className="course-list">
      <div className="course-list__header">
          <PageTitle
            className="course-list__title page-title"
            title="Course List"
          />
          <ViewOptions selectedOption="Courses"/>
      </div>
      <div className="course-list__table">
        <ListComponentUniversal
          onDelete={onDelete}
          onEdit={onEdit}
          data={dataSource}
        />
      </div>
      <Modal
        title="Edit Entry"
        open={isEditing}
        okText="Save"
        onCancel={() => {
          resetEditing();
        }}
        onOk={() => {
          setDataSource((pre) => {
            return pre.map((e) => {
              if (e.id === editingEntry.id) {
                return editingEntry;
              } else {
                return e;
              }
            });
          });
          resetEditing();
        }}
      >
        <Input
          value={editingEntry?.course_name}
          onChange={(e) => {
            setEditingEntry((pre) => {
              return { ...pre, course_name: e.target.value };
            });
          }}
        />
      </Modal>
    </div>
    
  );
};

export default CourseListContainer;
