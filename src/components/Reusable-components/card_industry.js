import "./card_industry.css";

const CardIndustry = (props) => {
  return (
    <div>
      <div className="card industry-card px-2 px-md-4 px-lg-5 pl-0 text-center">
        <div className="card-body  my-3 my-sm-0">
          <img
            src={props.image}
            alt="Industry Icon"
            className="img-fluid w-50"
          />
          <h2 className="card-title industry-text fw-normal fs-6 fs-md-5 m-0 py-2 py-sm-3">
            {props.title}
          </h2>
          {/* <p className="card-text m-0 py-1 py-sm-2">{props.content}</p>
          <a href="#" className="btn more-clients-btn p-0 m-0 py-1 py-sm-2">
            See Project <i class="fas fa-arrow-right m-2"></i>
          </a> */}
        </div>
      </div>
    </div>
  );
};

export default CardIndustry;
