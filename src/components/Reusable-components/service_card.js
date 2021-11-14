import React from "react";
import "./service_card.css";

const ServiceCard = (props) => {
  return (
    <div
      id="service-card"
      className="card text-center py-4 px-1 px-md-0 px-lg-2 px-xl-3 border-0  mx-5 my-3 mt-1"
      style={{ height: "22rem" }}
    >
      <div className="service icon container mt-2">
        {" "}
        <img
          src={props.image}
          className="card-img-top img-fluid my-1"
          style={{ width: "28%" }}
          alt="Service icon"
        />
      </div>

      <div className="card-body">
        <h4 className="card-title fw-bold py-2">{props.title}</h4>
        <p className="card-text py-1 lh-sm text-secondary ">{props.text}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
