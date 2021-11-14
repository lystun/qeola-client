import axios from "axios";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import Add from "./add";
import Edit from "./edit";
import ReactPaginate from "react-paginate";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Top from "./top";

const MainSpace = (props) => {
  // const output = useSelector((state) => state.output);
  const dispatch = useDispatch();
  const [Output, setOutput] = useState();

  const { addBlog, editBlog } = bindActionCreators(actionCreators, dispatch);

  // PAGINATION
  const [loading, setLoading] = useState(false);
  const [loadingB, setLoadingB] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 5;

  const [posts, setPosts] = useState("");
  const [PostsB, setPostsB] = useState();

  let token;

  const Tokena = useSelector((state) => state.output);
  if (Tokena) {
    token = Tokena.token;
  }
  // console.log(token);
  const all = () => {
    axios.get("https://qeola-api.herokuapp.com/api/v1/posts").then(
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

  const deletePost = (id) => {
    axios
      .delete(`https://qeola-api.herokuapp.com/api/v1/posts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          // console.log(response);
          if (response) {
            renderPosts(pageNumber, itemsPerPage);
          }
        },
        (error) => {
          // console.log(error);
        }
      );
  };

  const renderPosts = (page, limit) => {
    all();
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/posts?page=${page}&limit=${limit}`
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
                        <th>Title</th>
                        <th>Author</th>
                        <th>Date Created</th>
                        <th>Category</th>
                        <th className="text-center">Edit</th>
                        <th className="text-center">Delete</th>
                      </tr>
                    </thead>
                    <tbody>
                      {response.data.data.map((item, i) => {
                        // console.log(item);
                        return (
                          <tr key={item._id}>
                            <td>{page * 5 - 5 + (i + 1)}</td>
                            <td className="fw-bold">{item.title}</td>
                            <td>{item.title !== null && item.author}</td>
                            <td>{item.createdAt}</td>
                            <td>
                              {" "}
                              {item.category !== null && item.category.name}
                            </td>
                            <td className="text-center">
                              <i
                                onClick={() => editBlog(item.id)}
                                className="material-icons p-1 rounded-circle"
                              >
                                settings
                              </i>
                            </td>
                            <td className="text-center">
                              <i
                                onClick={() => deletePost(item.id)}
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
    renderPosts(selected + 1, itemsPerPage);
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
          />{" "}
          <div className="section-topic">
            <h1 className="fw-bold my-3">Blog</h1>
          </div>
          <div className="row justify-content-start mb-4">
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => renderPosts(pageNumber, itemsPerPage)}
            >
              <Edit icon={"app_registration"} label={props.texta} />
            </div>
            <div
              className="col-12 col-sm-6 col-lg-4 col-xl-3"
              onClick={() => addBlog()}
            >
              <Add icon={"playlist_add"} label={props.textb} />
            </div>
          </div>
          {/* {Output} */}
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
export default MainSpace;
