import "./PageChange.scss";

import React from "react";

const PageChange = ({
  squareOne,
  squareTwo,
  squareThree,
  squareFour,
  squareFive,
  handlePageChange,
}) => {
  return (
    <section>
      <div className="pageChange_button">&lt;</div>
      <div className="pageChange_button" onClick={handlePageChange}>
        1{squareTwo}
      </div>
      <div className="pageChange_button" onClick={handlePageChange}>
        2{squareOne}
      </div>
      <div className="pageChange_button" onClick={handlePageChange}>
        3{squareThree}
      </div>
      <div className="pageChange_button" onClick={handlePageChange}>
        ...{squareFour}
      </div>
      <div className="pageChange_button" onClick={handlePageChange}>
        25{squareFive}
      </div>
      <div className="pageChange_button">&gt;</div>
    </section>
  );
};

export default PageChange;
