import React from "react";
import _ from "lodash";
const Pagination = (props) => {
  const { itemCount, pageSize, currentPage } = props;

  const pagesCount = Math.ceil(itemCount / pageSize);
  const pages = _.range(1, pagesCount + 1);
  if (pagesCount == 1) return null;
  return (
    <nav aria-label="Page navigation example">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link" href="#">
            Previous
          </a>
        </li>
        {pages.map((page) => (
          <li class={currentPage == page ? "page-item active" : "page-item"}>
            <a class="page-link" onClick={() => props.onPagechange(page)}>
              {page}
            </a>
          </li>
        ))}

        <li class="page-item">
          <a class="page-link" href="#">
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
