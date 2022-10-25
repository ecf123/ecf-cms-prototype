import "./PathwaysListContainer.scss";
import { Link } from "react-router-dom";
import { ReactComponent as Pencil } from "../../assets/pen-icon.svg";
import { useEffect, useState } from "react";
import ListComponentUniversal from "../../components/ListComponentUniversal/ListComponentUniversal";
import PageTitle from "../../components/PageTitle/PageTitle";
import SearchBar from "../../components/SearchBar/SearchBar";
import Button from "../../components/Button/Button";

const PathwaysListContainer = ({ dataJSON }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [dataSource, setDataSource] = useState(null);

  const cleanData = () => {
    const filteredData = dataJSON
      ? dataJSON.filter((entry) =>
          entry.header.toLowerCase().includes(searchTerm.toLowerCase())
        )
      : null;
    if (filteredData.length > 0) {
      setDataSource(
        filteredData.map((entry) => {
          let providersArr = [
            entry.skillsTree.children[0].icon,
            entry.skillsTree.children[0].children[1].children[0].icon,
          ];
          entry.skillsTree.children[0].children.forEach((part) => {
            providersArr.push(part.icon);
          });

          return {
            key: entry.id,
            id: entry.id,
            pathway_name: entry.header,
            providers: providersArr,
            no_of_courses: entry.skillsTree.children[0].children.length,
            no_of_lessons: 122,
            pathways_length: "19 hrs",
            students_enrolled: 21,
            category: entry.category.split(","),
          };
        })
      );
    } else {
      setDataSource(null);
    }
  };

  useEffect(() => {
    cleanData();
  }, [searchTerm]);

  const handleSearchInput = (event) => {
    setSearchTerm(event.target.value);
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
          placeHolderText="Search for pathways"
          handleSearchInput={handleSearchInput}
          value={searchTerm}
        />
        <Link to="/addpathway">
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
        <ListComponentUniversal data={dataSource} />
      </div>
    </div>
  );
};

export default PathwaysListContainer;
