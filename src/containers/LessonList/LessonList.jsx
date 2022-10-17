import "./LessonList.scss"
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";



const dataJSON=[{
  id:"kjsvswkvfsihvds"},
     {
  challenges:[
      {   
      duration:"15 minutes",
      type:"Assigment"
        },
      {
        duration:"1 hrs",
        type:"Assigment"
          }]
      },{
  lessons:[
        {   
        duration:"15 minutes",
        type:"Video"
          },
        {
        duration:"10 minutes",
        type:"Video"
            },
            {
        duration:"15 minutes",
        type:"Video"
                }]
        },{
  title :"Halifax",
      }, 
        {
  name:"Halifax as provider",
        }
]
// const data = [];
// for (let i = 0; i < 60; i++) {
//   data.push({
//     key: i,
//     id: i,
//     pathway_name: `Financial Forest + ${i}`,
//     providers: [
//       "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
//       "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
//     //   Barclays,
//     //   Airbnb,
//     ],
//     no_of_courses: `8`,
//     no_of_lessons: `8`,
//     est_completion_time: `20hrs`,
//     no_enrolled: 32,
//     category: [
//       "design",
//       "business",
//       "digital marketing",
//       "programming",
//       "finance",
//     ],
//   });
// }

// for (let i = 0; i < 5; i++) {
//   data.push({
//     key: i,
//     id: i,
//     course_name: `Commercial Banking + ${i}`,
//     course_provider: "Barclays",
//     no_of_lessons: `23`,
//     no_of_assignments: `2`,
//     course_length: `345 mins`,
//     students_enrolled: 124,
//   });
// }

const LessonList = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [editingEntry, setEditingEntry] = useState(null);
     
    const data=[];
console.log(dataJSON);
  dataJSON.forEach(course => {
    let durrationArray=[];
    let courseDuration=0; 

        course.lessons.forEach(element => {
              durrationArray.push(...element.duration.split(" "))
                  });
                  console.log(durrationArray);
        course.challenges.forEach(element => {
              durrationArray.push(...element.duration.split(" "))
                   });

  for (let i = 0; i < durrationArray.length; i++) {

    if(durrationArray[i]=="hrs"){
     courseDuration +=Number(durrationArray[i-1])*60
    }
    else if(durrationArray[i]=="minutes"){
     courseDuration +=Number(durrationArray[i-1])
    }


    data.push({
    key: course.id,
    id: course.id,
    // missing name from database 
    course_name: course.name,
    course_provider: course.title,
    no_of_lessons:course.lessons.length() ,
    no_of_assignments: course.challenges.length(),
    course_length: courseDuration,
     // missing name from database 
    students_enrolled: 0,
  
    })
  }
}) ;

const [dataSource, setDataSource] = useState(data);

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
            value={editingEntry?.pathway_name}
            onChange={(e) => {
                setEditingEntry((pre) => {
                return { ...pre, pathway_name: e.target.value };
                });
            }}
            />
            <Input
            value={editingEntry?.category}
            onChange={(e) => {
                setEditingEntry((pre) => {
                return { ...pre, category: e.target.value.split(",") };
                });
            }}
            />
        </Modal>
    </>
  )
}

export default LessonList