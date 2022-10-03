import "./PageChange.scss";
import ReactPaginate from "react-paginate";



import React from "react";


// Make props: what to do on page change, page count, current page, ho

const PageChange = ({
  totalPages = 25, handlePageChange,
}) => {
  return (
    <ReactPaginate
  previousLabel={"<"}
  nextLabel={">"}
  pageCount={totalPages}
  onPageChange={handlePageChange}
  containerClassName={"pagination"}
  //previousLinkClassName={"previousButton"}
  //nextLinkClassName={"nextButton"}
  disabledClassName={"inactive"}
  activeClassName={"active"}
/>
  );
};

export default PageChange;
