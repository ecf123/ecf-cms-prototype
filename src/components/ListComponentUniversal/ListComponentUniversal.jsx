import "antd/dist/antd.min.css";
import "./ListComponentUniversal.scss";
import { Table, Tag } from "antd";
import { Link } from "react-router-dom";
const ListComponentUniversal = ({ data }) => {
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
                  let color = "#F1CCEB";
                  const colors = ["orange", "purple", "cyan", "green", "red"];
                  const categories = [
                    "design",
                    "digital marketing",
                    "programming",
                    "finance",
                    "business",
                  ];
                  categories.forEach((category, index) => {
                    if (category == tag.toLowerCase().trim()) {
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