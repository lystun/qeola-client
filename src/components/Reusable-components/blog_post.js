const BlogPost = (props) => {
  return (
    <div
      id="topic"
      className="d-flex flex-column justify-content-between topic p-3 p-md-5 rounded-3 mt-5 mb-3 position-relative"
      style={{
        backgroundImage: `url(${props.image})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100%",
      }}
    >
      <div className="overlayd d-flex justify-content-center align-items-center"></div>

      <div className="pb-5 mb-5 blog-post-desc">
        <p className="fw-bold fst-italic order-1">{props.category}</p>
      </div>
      <div className="mt-5 pt-5 w-75 blog-post-desc">
        <h1 className="fw-bold fs-1">{props.title}</h1>
        <p className="py-2">{props.text}</p>
      </div>
    </div>
  );
};

export default BlogPost;
