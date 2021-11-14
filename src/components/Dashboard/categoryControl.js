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

const CategoryControl = (props) => {
  const [Output, setOutput] = useState();
  const dispatch = useDispatch();

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState();
  const [PostsB, setPostsB] = useState();

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }
  const { addCategory, editCategory } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
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

  const deleteCategory = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/categories/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderCategories(pageNumber, itemsPerPage);
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  };

  const renderCategories = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/categories?page=${page}&limit=${limit}`
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
                      <tr>
                        <th>S/N</th>
                        <th>Category</th>
                        <th>Date Created</th>
                        <th>Edit</th>
                        <th>Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.data.data.map((item, i) => {
                        // console.log(item);
                        return (
                          <tr key={item._id}>
                            <td>{page * 5 - 5 + (i + 1)}</td>
                            <td className="fw-bold">{item.name}</td>
                            <td>{item.createdAt}</td>
                            <td>
                              <i
                                onClick={() => editCategory(item.id)}
                                class="material-icons p-1 rounded-circle"
                              >
                                settings
                              </i>
                            </td>
                            <td>
                              <i
                                onClick={() => deleteCategory(item.id)}
                                class="material-icons p-1 rounded-circle"
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
    renderCategories(selected + 1, itemsPerPage);
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
            <h1 className="fw-bold my-3">Categories</h1>
          </div>
          <div className="row justify-content-start mb-4">
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => renderCategories(pageNumber, itemsPerPage)}
            >
              <Edit icon={"app_registration"} label={"Category List"} />
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => addCategory()}
            >
              <Add icon={"playlist_add"} label={"Create New Category"} />
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
          )}{" "}
        </div>
      </main>
    </div>
  );
};
export default CategoryControl;
