import Layout from "../../components/Layout/Layout";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
// import Barclays from "../../assets/barclays-icon-white-background.svg";
import Airbnb from "../../assets/airbnb-logo.svg";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useState } from "react";

// const textToImage = (image) => {
//   return <img src={image} className="providers" />;
// };

const data = [];
for (let i = 0; i < 5; i++) {
  data.push({
    key: i,
    id: i,
    pathway_name: `Financial Forest + ${i}`,
    providersIcon: [
      Airbnb,
      Airbnb,
      // textToImage(Airbnb),
      // textToImage(Airbnb),
      // textToImage(Airbnb),
    ],
    no_of_courses: `8`,
    no_of_lessons: `8`,
    est_completion_time: `20hrs`,
    no_enrolled: 32,
    category: `management`,
  });
}

const Home = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState(data);

  const columns = [];

  Object.keys(data[0]).forEach((header) => {
    // if (header == "providersIcon") {
    // }

    if (header != "id" && header != "key")
      columns.push({
        title: header.replace(/_/g, " ").toUpperCase(),
        dataIndex: header,
      });
  });

  // const jsx = Object.keys(data[0]).map((header, index) => {
  //   if (header != "id" && header != "key"){
  //   return (
  //   <Input
  //     key={index}
  //     value={editingEntry?.header}
  //     onChange={(e) => {
  //       setEditingEntry((pre) => {
  //         return { ...pre, header: e.target.value };
  //       });
  //     }}
  //   />)
  //   }
  // });

  columns.push({
    key: "",
    title: "",
    render: (e) => {
      return (
        <>
          <EditOutlined
            onClick={() => {
              onEdit(e);
            }}
          />
          <DeleteOutlined
            onClick={() => {
              onDelete(e);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      );
    },
  });

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
      <ListComponentUniversal columns={columns} data={dataSource} />
      <img src={Airbnb} />
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
          value={editingEntry?.no_of_courses}
          onChange={(e) => {
            setEditingEntry((pre) => {
              return { ...pre, no_of_courses: e.target.value };
            });
          }}
        />
      </Modal>
    </Layout>
  );
};

export default Home;
