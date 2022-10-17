import "antd/dist/antd.min.css";
import "./ListComponentUniversal.scss";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";
import edit from "../../assets/notepad-and-pencil-grey.svg";
import deletes from "../../assets/bin-icon.svg";

const ListComponentUniversal = ({ data, onEdit, onDelete }) => {
  const columns = [];

  data
    ? Object.keys(data[0]).forEach((header) => {
        if (header.includes("name")) {
          columns.push({
            title: header.replace(/_/g, " ").toUpperCase(),
            key: header,
            dataIndex: header,
            className: "table__cell",
            render: (text) => (
              <Link to={text.split(" ").join("")} className="table__name">
                {text}
              </Link>
            ),
          });
        } else if (header == "category") {
          columns.push({
            title: "CATEGORY",
            key: "category",
            dataIndex: "category",
            className: "table__categories table__cell",
            render: (_, { category }) => (
              <>
                {category.map((tag) => {
                  let color = "#f1cceb";
                  const colors = ["orange", "purple", "cyan", "green", "red"];
                  const categories = [
                    "design",
                    "digital marketing",
                    "programming",
                    "finance",
                    "business",
                  ];
                  categories.forEach((category, index) => {
                    if (category == tag) {
                      color = colors[index];
                    }
                  });

                  return (
                    <Tag color={color} key={tag} className="table__tag">
                      {tag.toUpperCase()}
                    </Tag>
                  );
                })}
              </>
            ),
          });
        } else if (header == "providers") {
          columns.push({
            key: "providers",
            title: "PROVIDERS",
            dataIndex: "providers",
            className: "table__cell",
            render: (_, { providers }) => (
              <>
                {providers.map((icon) => (
                  <img src={icon} key={icon} className="table__providers" />
                ))}
              </>
            ),
          });
        } else if (header != "id" && header != "key")
          columns.push({
            title: header.replace(/_/g, " ").toUpperCase(),
            dataIndex: header,
            className: "table__cell",
          });
      })
    : data;

  columns.push({
    key: "",
    title: "",
    render: (e) => {
      return (
        <>
          <button
            className="table__edit"
            onClick={() => {
              onEdit(e);
            }}
          >
            <img src={edit} alt="edit pencil" />
          </button>
          <button
            className="table__delete"
            onClick={() => {
              onDelete(e);
            }}
          >
            <img src={deletes} alt="edit pencil" />
          </button>
        </>
      );
    },
  });

  return (
    <Table
      className="table"
      columns={columns}
      dataSource={data}
      pagination={{ position: ["bottomLeft"], pageSize: 5 }}
    />
  );
};

export default ListComponentUniversal;
