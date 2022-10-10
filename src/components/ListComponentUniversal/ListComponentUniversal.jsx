import "antd/dist/antd.css";
import "./ListComponentUniversal.scss";
import {  Table } from "antd";
import { useState } from "react";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

const ListComponentUniversal = ({columnHeader, data, handleDelete, handleEdit}) => {
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

  const columnLastItem = {
    title: " ",
    dataIndex: "edit",
    render: () => {
      return (
        <>
          <DeleteOutlined
            onClick={handleDelete}
            style={{ color: "red", marginRight: 12 }}
          />
          <EditOutlined onClick={handleEdit} />
        </>
      );
    },
  }

const columns = columnHeader.push(columnLastItem);

  return (
    <>
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    </>
  );
};
export default ListComponentUniversal;