import axios from "axios";
import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Link } from "react-router-dom";
import BlogPost from "../Reusable-components/blog_post";
import EmptyState from "../Reusable-components/empty_state";

const BlogSelection = () => {
  const [selectCat, setSelectCat] = useState();
  // const [currentCat, setCurrentCat] = useState();

  // PAGINATION
  const [loadingB, setLoadingB] = useState(false);
  const [loading, setLoading] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  // const [page, setPage] = useState();
  const itemsPerPage = 5;
  const [PostsB, setPostsB] = useState();

  const [active, setActive] = useState({
    allTopics: "active",
    branding: "",
    uiux: "",
    caseSturdy: "",
    SD: "",
  });

  const [topics, setTopics] = useState();

  const url = "https://qeola-api.herokuapp.com/api/v1/posts";

  useEffect(() => {
    setLoading(true);
    all();
    axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
      (response) => {
        setSelectCat(response && response.data.data);
      },
      (error) => {
        // console.log(error);
      }
    );
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/posts?page=${pageNumber}&limit=${5}`
      )
      .then(
        (response) => {
          setLoading(false);
          // console.log(response);
          setTopics(
            response &&
              response.data.data.map((item) => {
                return (
                  <Link
                    to={`/blog-details/${item.id}`}
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
                );
              })
          );
        },
        (error) => {
          setLoading(false);
          // console.log(error);
        }
      );
  }, []);

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

  const AllTopics = (page, limit) => {
    setLoadingB(true);
    setActive({
      allTopics: "active",
      branding: "",
      uiux: "",
      caseSturdy: "",
      SD: "",
    });
    axios
      .get(
        `https://qeola-api.herokuapp.com/api/v1/posts?page=${page}&limit=${limit}`
      )
      .then(
        (response) => {
          setTopics(
            response &&
              response.data.data.map((item, i) => {
                return (
                  <Link
                    to={`/blog-details/${item.id}`}
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
                );
              })
          );
        },
        (error) => {
          // console.log(error);
        }
      );
  };
  const otherCategories = (category) => {
    // console.log(category);
    setLoadingB(false);
    setActive({
      allTopics: "",
      branding: category,
      uiux: "",
      caseSturdy: "",
      SD: "",
    });
    // axios.get("https://qeola-api.herokuapp.com/api/v1/categories").then(
    //   (response) => {
    //     setCurrentCat(
    //       response &&
    //         response.data.data.map((item) => {
    //           return item.name === category && "active";
    //         })
    //     );
    //   },
    //   (error) => {
    //     // console.log(error);
    //   }
    // );

    axios.get(url).then(
      (response) => {
        const arry = response.data.data.filter(
          (filt) => filt.category.name === category
        );

        if (arry.length === 0) {
          setTopics(
            <EmptyState
              image={"/images/empty-state/Group2.png"}
              text={"No blog post"}
            />
          );
        } else {
          setTopics(
            arry.map((item) => {
              return (
                item.category.name === category && (
                  <Link
                    to={`/blog-details/${item.id}`}
                    className="text-decoration-none"
                    key={item._id}
                  >
                    <BlogPost
                      image={item.image}
                      category={item.category.name}
                      title={item.title}
                    />
                  </Link>
                )
              );
            })
          );
        }
      },
      (error) => {
        // console.log(error);
      }
    );
  };
  const PageCount = PostsB && PostsB;
  const pageChange = ({ selected }) => {
    setPageNumber(selected);
    // setPage(selected + 1);
    AllTopics(selected + 1, 5);
  };
  // console.log(page);
  return (
    <section id="blog-selection">
      {loading && (
        <div className="overlayc d-flex justify-content-center align-items-center">
          <div className="loader"></div>
        </div>
      )}
      <div className="container">
        <div className="containing mx-auto">
          <div className="my-5 pt-5">
            <button
              className={`shadow-none px-0 mx-3 py-1 ${active.allTopics}`}
              onClick={AllTopics}
            >
              All Topics
            </button>
            {selectCat &&
              selectCat.map((item) => {
                return (
                  <button
                    key={item.id}
                    className={`shadow-none px-0 mx-3 py-1 ${
                      active.branding === item.name ? "active" : ""
                    }`}
                    onClick={() => otherCategories(item.name)}
                  >
                    {item.name}
                  </button>
                );
              })}
          </div>
          <div className="my-5 pb-5 mx-auto"> {topics}</div>
          <div className="pb-3">
            {loadingB && PageCount > 1 ? (
              <ReactPaginate
                previousLabel="Prev"
                nextLabel="Next"
                pageCount={PageCount}
                onPageChange={pageChange}
                containerClassName={"contain"}
                previousLinkClassName={"previouser"}
                breakClassName={"page"}
                nextLinkClassName={"nexter"}
                pageClassName={"pager"}
                disabledClassName={"disabled"}
                activeClassName={"active-paginater"}
              />
            ) : (
              <div></div>
            )}{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSelection;
