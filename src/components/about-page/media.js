const Media = () => {
  return (
    <section id="media" className="py-5">
      <div className="container">
        <div className="media-header text-center text-lg-start my-4">
          <h2 className="fw-bold fs-1">Media Mention</h2>
          <p>
            We have been recognized by various design professional organizations
            and renowned firms.
          </p>
        </div>
        <div className="row align-items-center justify-content-center text-center">
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1 ">
            <img
              src="images/About/awwwards_logo.png"
              alt=""
              className="img-fluid w-75"
            />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img
              src="images/About/the_guardian.png"
              alt=""
              className="img-fluid w-75"
            />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img
              src="images/About/tech_crunch.png"
              alt=""
              className="img-fluid w-75 "
            />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img src="images/About/bbc.png" alt="" className="img-fluid w-75" />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img src="images/About/cbn.png" alt="" className="img-fluid w-50" />
          </div>
          <div className=" col-6 col-md-4 p-2 p-md-3 my-1">
            <img src="images/About/sky.png" alt="" className="img-fluid w-50" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Media;
