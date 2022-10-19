import "./PathwaysListContainer.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ViewOptions from "../../components/ViewOptions/ViewOptions";

const entryListContainer = ({dataJSON}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState(dataJSON ? dataJSON.map(entry => {



    return {
      key: entry.id,
      id: entry.id,
      pathway_name: entry.header,
      providers: [],
      no_of_courses: entry.skillstree.children[0].children.length,
      no_of_lessons: "171",
      entry_length: "22 hrs",
      // missing name from database
      students_enrolled: 0,
    };
  }) : dataJSON);

//    const data = [];
//  for (let i = 0; i < 60; i++) {
//  data.push({
//   key: i,
//   id: i,
//   pathway_name: `Financial Forest + ${i}`,
//   providers: [
//    "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
//    "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
//   //  Barclays,
//   //  Airbnb,
//   ],
//   no_of_courses: `8`,
//   no_of_lessons: `8`,
//   est_completion_time: `20hrs`,
//   no_enrolled: 32,
//   category: [
//    "design",
//    "business",
//    "digital marketing",
//    "programming",
//    "finance",
//   ],
//  });
// }
//  const [dataSource, setDataSource] = useState(data);

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
    <div className="entry-list">
      <div className="entry-list__header">
          <PageTitle
            className="entry-list__title page-title"
            title="entry List"
          />
          <ViewOptions selectedOption="entrys"/>
      </div>
      <div className="entry-list__table">
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
     value={editingEntry?.entry_name}
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
    </div>
    
  );
};

export default entryListContainer;