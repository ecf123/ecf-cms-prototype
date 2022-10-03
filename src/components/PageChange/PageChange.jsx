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
      <div className="pageChange">
        {/* add this to handlePageChange function - pageChange_button.classList.add("-active") */}
        <div className="pageChange_button">&lt;</div>
        <div className="pageChange_button" onClick={handlePageChange}>
          1{squareOne}
        </div>
        <div className="pageChange_button" onClick={handlePageChange}>
          2{squareTwo}
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
      </div>
    </section>
  );
};

export default PageChange;
