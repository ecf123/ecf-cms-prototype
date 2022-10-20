import "./PathwaysListContainer.scss";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import { Modal, Input } from "antd";
import { useState } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import {ReactComponent as Pencil} from "../../assets/pen-icon.svg";
import { useEffect } from "react";

let dataJSON = [];
for (let i = 0; i < 6; i++) {
dataJSON.push({
 key: i,
 id: i,
 pathway_name: `Financial Forest + ${i}`,
 providers: [
  "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhsbc.svg?alt=media&token=f568f1fc-ade3-4bbf-9aee-1dc841cce600",
  "https://firebasestorage.googleapis.com/v0/b/ecf-future-hub.appspot.com/o/pathway%2Ficons%2Fhalifax.svg?alt=media&token=0b431ade-cb19-4cc1-bc7d-b4d4456146a0",
 //  Barclays,
 //  Airbnb,
 ],
 no_of_courses: `8`,
 no_of_lessons: `8`,
 est_completion_time: `20hrs`,
 no_enrolled: 32,
 category: [
  "design",
  "business",
  "digital marketing",
  "programming",
  "finance",
 ],
});
}

const PathwaysListContainer = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editingEntry, setEditingEntry] = useState(null);
  const [dataSource, setDataSource] = useState(null);

  const cleanData = () => {
    dataJSON ? setDataSource(dataJSON
    .filter((entry) => {entry.pathway_name.toLowerCase().includes(searchTerm.toLowerCase())})
    .map((entry) => {      
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
          }))
        : setDataSource(null)
  }
  
  
  useEffect(() => {
    cleanData()
  }, [searchTerm])


  // dataJSON
  //     ? dataJSON.filter((entry) =>
  //   entry.header.toLowerCase().includes(searchTerm.toLowerCase()))
  //     .map((entry) => {
      
    //       let providersArr = [
    //         entry.skillstree.children[0].icon,
    //         entry.skillstree.children[0].children[1].children[0].icon,
    //       ];
    //       entry.skillstree.children[0].children.forEach((part) => {
    //         providersArr.push(part.icon);
    //       });

  //         return {
  //           key: entry.id,
  //           id: entry.id,
  //           pathway_name: entry.header,
  //           providers: providersArr,
  //           no_of_courses: entry.skillstree.children[0].children.length,
  //           no_of_lessons: Math.floor(Math.random() * 150 + 20),
  //           entry_length: Math.floor(Math.random() * 25 + 5) + " hrs",
  //           // missing name from database
  //           students_enrolled: Math.floor(Math.random() * 15 + 10),
  //         };
  //       })
  //     : dataJSON
  // );

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
  };



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
    <div className="pathway-list">
      <div className="pathway-list__header">
        <PageTitle
          className="pathway-list__title page-title"
          title="Pathways List"
        />
      </div>

      <nav className="pathway-list__nav">
          <SearchBar
            placeHolderText={"Search for placeholder"}
            handleSearchInput={handleSearchInput}
            value={searchTerm}
          />
          <Link to="*">
            <Button
              style={"button black round-border large"}
              imgStyle={"medium-img white-svg"}
              textStyle={"text medium-text black"}
              buttonText={"Add Pathways"}
            >
              <Pencil />
            </Button>
          </Link>
        </nav>

      <div className="pathway-list__table">
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

export default PathwaysListContainer;
