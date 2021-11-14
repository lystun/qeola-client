import axios from "axios";
import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

const MoreArticles = () => {
  const [more, setMore] = useState();

  useEffect(() => {
    axios
      .get(`https://qeola-api.herokuapp.com/api/v1/posts?page=1&limit=4`)
      .then(
        (response) => {
          // console.log(response);
          setMore(
            response &&
              response.data.data.map((item, i) => {
                return (
                  <a
                    key={item._id}
                    href={`/blog-details/${item.id}`}
                    className="col-12 col-md-6 col-lg-4 col-xl-3 my-3 text-decoration-none"
                  >
                    <div
                      className="article position-relative"
                      style={{
                        backgroundImage: `url(${item.image})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        height: "320px",
                      }}
                    >
                      <div className="overlayd d-flex justify-content-center align-items-center"></div>

                      <div className="d-flex-column justify-content-between p-3 rounded-3 position-relative w-100 h-100 blog-post-desc">
                        <p className="align-self-start pb-5 mb-5 ">
                          <em>{item.category.name}</em>
                        </p>
                        <h4 className="fs-5 fw-bold align-self-end pt-5 mt-5 ">
                          {item.title}
                        </h4>
                      </div>
                    </div>
                  </a>
                );
              })
          );
        },
        (error) => {
          // console.log(error);
        }
      );
  }, []);
  return (
    <div className="container">
      <div className="more-articles my-5">
        <div className="more-articles-header my-3">
          <h3 className="fw-bold fs-2 ">More Articles</h3>
        </div>
        <div className="row">{more}</div>
      </div>
    </div>
  );
};
export default MoreArticles;
