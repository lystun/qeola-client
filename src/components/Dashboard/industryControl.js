import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Top from "./top";

const IndustryControl = (props) => {
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState();
  const [PostsB, setPostsB] = useState();

  const { addIndustry } = bindActionCreators(actionCreators, dispatch);

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/users").then(
      (response) => {
        // console.log({ all: response });
        setLoadingB(true);
        setPostsB(Math.ceil(response.data.data.length / itemsPerPage));
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  // console.log(PostsB);

  const renderUsers = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/users?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            // console.log(response);
            setPosts(...[response.data.data]);
            setLoading(true);
            setOutput(
              response && (
                <div style={{ overflowX: "auto" }}>
                  <table style={{ width: "100%" }} className="">
                    <thead>
                      <tr>
                        <th>S/N</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Date Registered</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.data.data.map((item, i) => {
                        // console.log(item);
                        return (
                          <tr>
                            <td>{page * 5 - 5 + (i + 1)}</td>
                            <td className="fw-bold">{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.createdAt}</td>
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
  const PageCount = PostsB && PostsB;
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
    renderUsers(selected + 1, itemsPerPage);
    // console.log(selected + 1);
  };

  return (
    <div>
      <Top />
      <main className="P-5">
        <div className="p-5 py-3">
          <div>
            <input type="hidden" value={posts} />
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
            <h1 className="fw-bold my-3">Users</h1>
          </div>
          <div className="row justify-content-start mb-4">
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => renderUsers(pageNumber, itemsPerPage)}
            >
              <Edit icon={"app_registration"} label={"User List"} />
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => addIndustry()}
            >
              <Add icon={"playlist_add"} label={"Search User (By email)"} />
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
              disabledClassName={"disabled"}
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
export default IndustryControl;
