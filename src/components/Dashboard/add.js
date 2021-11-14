const Add = (props) => {
  return (
    <div>
      <button
        className="card cardb border-0  text-center m-3 ms-0 ms-md-5  "
        style={{ width: "16rem", textDecoration: "none" }}
      >
        <div className="card-body ">
          <div className="card-subtitle mb-2 pt-3">
            <i className="material-icons rounded-circle p-3 fs-2">
              {props.icon}
            </i>
          </div>
          <p className="card-text fw-bold py-3">{props.label}</p>
        </div>
      </button>
    </div>
  );
};

export default Add;
