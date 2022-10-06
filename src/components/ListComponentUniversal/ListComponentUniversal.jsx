import "antd/dist/antd.css";
import "./ListComponentUniversal.scss";
import {  Table } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "PATCHWAY NAME",
    dataIndex: "patchway_name",
  },
  {
    title: "PROVIDERS",
    dataIndex: "providers",
  },
  {
    title: "NO OF COURSES",
    dataIndex: "no_of_courses",
  },
  {
    title: "NO OF LESSONS",
    dataIndex: "no_of_lessons",
  },
  {
    title: "EST. COMPLETION TIME",
    dataIndex: "est_completion_time",
  },
  {
    title: "NO ENROLLED",
    dataIndex: "no_enrolled",
  },
  {
    title: "CATEGORY(S)",
    dataIndex: "category",
  },
  {
    title: " ",
    dataIndex: "edit",
    render: () => {
      return (
        <>
          <DeleteOutlined
            onClick={`clic`}
            style={{ color: "red", marginRight: 12 }}
          />
          <EditOutlined onClick={`clic`} />
        </>
      );
    },
  },
];
const data = [];
for (let i = 0; i < 2; i++) {
  data.push({
    key: i,
    patchway_name: `Financial Forest`,
    providers: `src`,
    no_of_courses: `8`,
    no_of_lessons: `8`,
    est_completion_time: `20hrs`,
    no_enrolled: 32,
    category: `src`,
    action: "",
  });
}
const ListComponentUniversal = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };
  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
    selections: [
      Table.SELECTION_ALL,
      Table.SELECTION_INVERT,
      Table.SELECTION_NONE,
      {
        key: "odd",
        text: "Select Odd Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return false;
            }
            return true;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
      {
        key: "even",
        text: "Select Even Row",
        onSelect: (changableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changableRowKeys.filter((_, index) => {
            if (index % 2 !== 0) {
              return true;
            }
            return false;
          });
          setSelectedRowKeys(newSelectedRowKeys);
        },
      },
    ],
  };
  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};
export default ListComponentUniversal;