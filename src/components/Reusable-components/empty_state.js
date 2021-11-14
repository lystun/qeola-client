import React from "react";

const EmptyState = (props) => {
  return (
    <div id="empty-state" className="my-3 text-center">
      <div className="empty-state-image mx-auto">
        <img src={props.image} alt="empty state" className="img-fluid " />
      </div>

      <h2 className="  my-3 mt-4 fw-bold">{props.text}</h2>
      <p className="">
        Click on the link above to <br /> explore other categories
      </p>
    </div>
  );
};

export default EmptyState;
