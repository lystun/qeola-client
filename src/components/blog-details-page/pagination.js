import { Link } from "react-router-dom";

const Pagination = () => {
  return (
    <section id="pagination" className="my-5">
      <nav aria-label="..." className=" border-0 shadow-none">
        <ul class="pagination pagination-sm justify-content-center shadow-none">
          <li class="page-item active " aria-current="page">
            <span class="page-link border-0 rounded-0 m-1 fw-bold">1</span>
          </li>
          <li class="page-item border-0">
            <Link class="page-link border-0 m-1 fw-bold" href="#">
              2
            </Link>
          </li>
          <li class="page-item ">
            <Link class="page-link border-0 m-1 fw-bold" href="#">
              3
            </Link>
          </li>
          <li class="page-item border-0 my-1">{"............"}</li>
          <li class="page-item border-0">
            <Link class="page-link border-0 m-1 fw-bold" href="#">
              10
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
};

export default Pagination;
