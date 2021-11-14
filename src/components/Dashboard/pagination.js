import React from "react";

const Paginate = ({ totalPosts, postsPerPage, paginator, pagin }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="my-3">
      <nav aria-label="Page navigation ">
        <ul className="pagination justify-content-center p-3" onClick={pagin}>
          <li className="page-item p-1">
            <a className="page-link p-3 fw-bold" href="!#">
              Previous
            </a>
          </li>
          {pageNumbers.map((num, i) => {
            return (
              <li className="page-item p-1" key={i}>
                <a
                  className="page-link p-3 fw-bold"
                  onClick={() => paginator(num)}
                >
                  {num}
                </a>
              </li>
            );
          })}
          <li className="page-item p-1">
            <a className="page-link p-3 fw-bold" href="!#">
              Next
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Paginate;
