import "./LessonList.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";



const LessonList = ({dataJSON}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState( dataJSON ? dataJSON.map((course) => {
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
    return{
        key: course.id,
        id: course.id,
        // missing name from database
        course_name: course.name,
        course_provider: course.title,
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
    <>
      <ListComponentUniversal
        onDelete={onDelete}
        onEdit={onEdit}
        data={dataSource}
      />
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
    </>
  );
};

export default LessonList;
