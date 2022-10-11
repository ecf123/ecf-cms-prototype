import "antd/dist/antd.css";
import "./ListComponentUniversal.scss";
import { Table } from "antd";
import { useState } from "react";
// import { ReactComponent as Barclays } from "../../assets/barclays-icon-white-background.svg";
// import Airbnb from "../../assets/airbnb-logo.svg";
// import { render } from "@testing-library/react/types
// import { render } from "react-dom";

const ListComponentUniversal = ({ columns, data }) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const onSelectChange = (newSelectedRowKeys) => {
    console.log("selectedRowKeys changed: ", selectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys);
  };

  // data.map((element) => {
  //   // console.log(element);
  //   if (element.providersIcon) {
  //     element.providersIconTag = [];
  //     element.providersIcon.forEach((icon) => {
  //       console.log(icon);
  //       element.providersIconTag.push(<img src={icon} className="providers" />);
  //       // icon = <img src={icon} className="providers" />;
  //     });
  //   }
  //   return element;
  // });

  // data = data.map((element) => {
  //   if (element.providersIcon) {
  //     element.providersIcon.map((icon, index) => {
  //       console.log(icon);
  //       // render: () => {
  //       return (
  //         <div key={index}>
  //           <img src={Airbnb} className="providers" alt="icon" />
  //         </div>
  //       );
  //       // };
  //     });
  //   }
  //   return element;
  // });

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
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
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
        onSelect: (changeableRowKeys) => {
          let newSelectedRowKeys = [];
          newSelectedRowKeys = changeableRowKeys.filter((_, index) => {
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
