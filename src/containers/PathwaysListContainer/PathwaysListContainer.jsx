import "./PathwaysListContainer.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import ViewOptions from "../../components/ViewOptions/ViewOptions";

const entryListContainer = ({ dataJSON }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState(
    dataJSON
      ? dataJSON.map((entry) => {
          let providersArr = [
            entry.skillstree.children[0].icon,
            entry.skillstree.children[0].children[1].children[0].icon,
          ];
          entry.skillstree.children[0].children.forEach((part) => {
            providersArr.push(part.icon);
          });

          return {
            key: entry.id,
            id: entry.id,
            pathway_name: entry.header,
            providers: providersArr,
            no_of_courses: entry.skillstree.children[0].children.length,
            no_of_lessons: Math.floor(Math.random() * 150 + 20),
            entry_length: Math.floor(Math.random() * 25 + 5) + " hrs",
            // missing name from database
            students_enrolled: Math.floor(Math.random() * 15 + 10),
          };
        })
      : dataJSON
  );

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
        <ViewOptions selectedOption="entrys" />
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
    </div>
  );
};

export default entryListContainer;
