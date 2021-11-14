const BlogBody = (props) => {
  const createMarkup = () => {
    return { __html: props.content };
  };
  return (
    <section id="blog-body" className="blog-body">
      <div className="container">
        <div className="blog-passage">
          <div className="blog-details-header text-start my-3 ">
            <p className="category p-0 m-0">
              <small>{props.category}</small>
            </p>
            <h1 className="fw-bold fs-1">{props.title} </h1>
            <p className="author fw-bold pb-4">
              <small>By {props.author}</small>
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <img
          src={props.image}
          alt="blog banner"
          className="img-fluid w-100"
          style={{
            objectFit: "cover",
            height: "600px",
            backgroundPosition: "center",
          }}
        />
      </div>
      <div className="container my-5">
        <div className="blog-passageb">
          <div dangerouslySetInnerHTML={createMarkup()} />
        </div>
      </div>
    </section>
  );
};

export default BlogBody;
