import "antd/dist/antd.min.css";
import "./ListComponentUniversal.scss";
import { Table, Tag } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const ListComponentUniversal = ({ data, onEdit, onDelete }) => {

  const columns = [];

  Object.keys(data[0]).forEach((header) => {
    if (header.includes("name")) {
      columns.push({
        title: header.replace(/_/g, " ").toUpperCase(),
        key: header,
        dataIndex: header,
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
        render: (_, { category }) => (
          <>
            {category.map((tag) => {
              let color = tag.length > 7 ? "processing" : "success";

              if (tag === "developer") {
                color = "error";
              }

              return (
                <Tag color={color} key={tag}>
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
        render: (_, { providers }) => (
          <>
            {providers.map((icon) => (
              <img src={icon} key={icon} className="providers" />
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
  });

  columns.push({
    key: "",
    title: "",
    render: (e) => {
      return (
        <>
          <EditOutlined
            className="table__edit"
            onClick={() => {
              console.log(e);
              onEdit(e);
            }}
          />
          <DeleteOutlined
            className="table__delete"
            onClick={() => {
              onDelete(e);
            }}
            style={{ color: "red", marginLeft: 12 }}
          />
        </>
      );
    },
  });

  return (

      <Table
        className="table"
        columns={columns}
        dataSource={data}
        pagination={{ position: ["bottomLeft"] }}
      />

  );
};

export default ListComponentUniversal;
