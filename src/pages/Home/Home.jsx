import Layout from "../../components/Layout/Layout";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import Barclays from "../../assets/barclays-icon-white-background.svg";
import Airbnb from "../../assets/airbnb-logo.svg";
import { useState } from "react";


const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    pathway_name: `Financial Forest + ${i}`,
    providers: [
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
      "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
      Barclays,
      Airbnb
    ],
    no_of_courses: `8`,
    no_of_lessons: `8`,
    est_completion_time: `20hrs`,
    no_enrolled: 32,
    category: [`management + ${i}`, 'developer', 'banking' ],
  });
}

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

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
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
  //  for
  return (
    <Layout>
      {/* <h1>Page Heading</h1>
      <h2>Section Heading</h2>
      <h3>Panel Heading</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non error
        dolor in nostrum minima odio a fuga saepe soluta adipisci perspiciatis
        maxime tempora, temporibus beatae voluptas repellat rerum. Dignissimos,
        necessitatibus.
      </p> */}
      <ListComponentUniversal onDelete={onDelete} onEdit={onEdit} data={dataSource} />
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
              return { ...pre, category: e.target.value.split(',') };
            });
          }}
        />
      </Modal>
    </Layout>
  );
};

export default Home;
