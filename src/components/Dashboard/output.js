import { Link } from "react-router-dom";
// import Pagination from "../blog-details-page/pagination";

const Output = () => {
  return (
    <section id="display" className="display border border-1 pb-3">
      <div className="">
        <div id="output" className="output text-center ">
          <div>
            <table style={{ width: "100%" }} className="">
              <tr>
                <th>S/N</th>
                <th>Title</th>
                <th>Category</th>
                <th>Writer</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>1</td>
                <td>Understanding Visual Identity Deliverables</td>
                <td>Branding</td>
                <td>Dayo Salako</td>
                <td>
                  <i class="material-icons p-1 rounded-circle">delete</i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>Understanding Visual Identity Deliverables</td>
                <td>UI/UX Design</td>
                <td>Dayo Salako</td>
                <td>
                  <i class="material-icons p-1 rounded-circle">delete</i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>Understanding Visual Identity Deliverables</td>
                <td>Case Sturdy</td>
                <td>Dayo Salako</td>
                <td>
                  <i class="material-icons p-1 rounded-circle">delete</i>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>Understanding Visual Identity Deliverables</td>
                <td>UI/UX Design</td>
                <td>Dayo Salako</td>
                <td>
                  <i class="material-icons p-1 rounded-circle">delete</i>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>Understanding Visual Identity Deliverables</td>
                <td>Software Development</td>
                <td>Dayo Salako</td>
                <td>
                  <i class="material-icons p-1 rounded-circle">delete</i>
                </td>
              </tr>
            </table>
            {/* <Pagination /> */}
            <section id="pagination" className="my-2">
              <nav aria-label="..." className=" border-0 shadow-none">
                <ul class="pagination pagination-sm justify-content-center shadow-none">
                  <li class="page-item active " aria-current="page">
                    <span class="page-link border-0 rounded-0 m-1 fw-bold">
                      1
                    </span>
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default Output;
