import React from "react";
import "./PageTitle.scss";

const PageTitle = ({ title, className }) => {
  return <h1 className={className}>{title}</h1>;
};

export default PageTitle;
