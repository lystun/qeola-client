import axios from "axios";
import { useState } from "react";
import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Top from "./top";

const BriefControl = (props) => {
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState("");
  const [PostsB, setPostsB] = useState();

  const [viewBriefText, setViewBriefText] = useState({
    text: "",
    email: "",
    name: "",
  });

  const { addBrief } = bindActionCreators(actionCreators, dispatch);

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/briefs").then(
      (response) => {
        //console.log({ all: response });
        setLoadingB(true);
        setPostsB(Math.ceil(response.data.data.length / itemsPerPage));
      },
      (error) => {
        //console.log(error);
      }
    );
  };
  // console.log(PostsB);

  const deleteBrief = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/briefs/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderBriefs(pageNumber, itemsPerPage);
          }
        },
        (error) => {
          // console.log(error);
          toast.error("Something went wrong please try again", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };
  const viewBrief = (text, email, name) => {
    setViewBriefText({ text, email, name });
  };
  const renderBriefs = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/briefs?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          if (response) {
            // console.log(response);
            setPosts(...[response.data.data]);
            setLoading(true);
            setOutput(
              response && (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%" }} className="">
                    <thead>
                      <tr className="text-center">
                        <th>S/N</th>
                        <th>Brief Title</th>
                        <th>Email</th>
                        <th>Date Created</th>
                        <th>Category</th>
                        <th className="text-center">View</th>
                        <th className="text-center">Download</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.data.data.map((item, i) => {
                        // console.log(item);
                        return (
                          <tr key={item._id}>
                            <td>{page * 5 - 5 + (i + 1)}</td>
                            <td className="fw-bold">{item.name}</td>
                            <td className="fw-bold">{item.email}</td>
                            <td>{item.createdAt}</td>
                            <td> {item.category.name}</td>
                            <td className="text-center">
                              <i
                                onClick={() =>
                                  viewBrief(
                                    item.briefText,
                                    item.email,
                                    item.name
                                  )
                                }
                                class="material-icons p-1 rounded-circle"
                                type="button"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                              >
                                <i class="fas fa-binoculars"></i>
                              </i>
                            </td>
                            <td className="cursor-pointer text-center">
                              <a href={item.briefFile}>
                                <span className="material-icons">download</span>
                              </a>
                            </td>
                            <td className="text-center">
                              <i
                                onClick={() => deleteBrief(item.id)}
                                className="material-icons p-1 rounded-circle"
                              >
                                delete
                              </i>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )
            );
          }
        },
        (error) => {
          toast.error("Something went wrong please try again", {
            position: "top-right",
            autoClose: 8000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
        }
      );
  };
  const PageCount = PostsB && PostsB;
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
    renderBriefs(selected + 1, itemsPerPage);
    // console.log(selected + 1);
  };
  return (
    <div>
      <Top />

      <main className="P-5">
        <div className="p-5 py-3">
          <div>
            <input type="hidden" value={posts} />
            <input type="hidden" value={pageNumber} />
          </div>
          <div
            className="modal fade"
            id="exampleModal"
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable ">
              <div className="modal-content">
                <div className="modal-header">
                  <h6 className="modal-title" id="exampleModalLabel">
                    Brief from <strong>{viewBriefText.name}</strong>
                    <br />
                    Email:<strong> {viewBriefText.email} </strong>
                  </h6>

                  <button
                    type="button"
                    className="btn-close shadow-none"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div className="modal-body">{viewBriefText.text}</div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                  {/* <button type="button" className="btn btn-primary">
                  Save changes
                </button> */}
                </div>
              </div>
            </div>
          </div>
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
          />
          <div className="section-topic">
            <h1 className="fw-bold my-3">Brief</h1>
          </div>

          <div className="row justify-content-start mb-4">
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => renderBriefs(pageNumber, itemsPerPage)}
            >
              <Edit icon={"app_registration"} label={"Brief List"} />
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => addBrief()}
            >
              <Add icon={"playlist_add"} label={"Create New Brief"} />
            </div>
          </div>
          {loading && Output}

          {loadingB && PageCount > 1 ? (
            <ReactPaginate
              previousLabel="Prev"
              nextLabel="Next"
              pageCount={PageCount}
              onPageChange={pageChange}
              containerClassName={"contain"}
              previousLinkClassName={"previous"}
              breakClassName={"page"}
              nextLinkClassName={"next"}
              pageClassName={"page"}
              disabledClassNae={"disabled"}
              activeClassName={"active-paginate"}
            />
          ) : (
            <div></div>
          )}
        </div>
      </main>
    </div>
  );
};
export default BriefControl;
